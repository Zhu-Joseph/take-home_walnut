import React, {useState} from 'react'
import { checkAuth, createUser, findUser } from '../utils/api'
import ErrorMessage from './ErrorMessage'

export default function User() {

    const initialState = {
        "username": "",
        "password": ""
    }

    const [user, setUser] = useState({...initialState})
    const [view, setView] = useState("password")
    const [loggedIn, setLoggedIn] = useState(false)
    const [error, setError] = useState(undefined);

    const handleChange = ({ target }) => {
        const value = target.value;
        setUser({
            ...user,
            [target.name]: value,
        })
    }

    const handleClear = (event) => {
        event.preventDefault()
        setUser(initialState)
    }

    const handleView = (event) => {
        event.preventDefault()

        if(view === "password") {
            setView("text")
        }
        else {
            setView("password")
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const abortController = new AbortController();
        findUser(user, abortController.signal)
        .then(setUser(initialState))
        .then((response) => {
            if(response.auth) {
                setLoggedIn(true)
                setUser(initialState)
                localStorage.setItem("token", response.token)
            }
        })
        .catch(setError);
      };

    const handleNewUser = (event) => {
        event.preventDefault();
        const abortController = new AbortController();
        createUser(user, abortController.signal)
        .then(() => {
            setUser(initialState)
            window.alert("New User created")
        })
        .catch(setError);
        if (error) {
          return <ErrorMessage error={error} />
        }
      };

      const handleAuthCheck = () => {
        const abortController = new AbortController();
        checkAuth(abortController.signal)
      }

    return (
        <>
            <form className="row gy-2 gx-3 align-items-center" onSubmit={handleSubmit}>
                <div className="col-auto">
                    <label className="col-form-label">Username</label>
                    <input name="username" type="text" className="form-control"
                    placeholder="Username"
                    onChange={handleChange} value={user.username} />
                </div>
                <div className="col-auto">
                    <label className="col-form-label">Password</label>
                    <input name="password" type={view} className="form-control"
                    placeholder="Password" onChange={handleChange} value={user.password} />
                </div>
                <br/>
                <div>
                    <button className="btn btn-primary col-auto">Submit</button>
                    <button className="btn btn-info col-auto" onClick={handleNewUser}>Sign Up</button>
                </div>
                <div>
                    <button className="btn btn-secondary col-auto" onClick={handleClear}>Clear</button>
                    <button className="btn btn-dark col-sm" onClick={handleView}>View PW</button>
                </div>
            </form>
            <br/>
            <div>
                {loggedIn ? 
                <button className="btn btn-success" onClick={handleAuthCheck}>You are logged in</button> 
                : null }
            </div>
        </>
    )
}
