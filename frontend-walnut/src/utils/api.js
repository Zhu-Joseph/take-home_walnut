/**
 * Defines the base URL for the API.
 * The default values is overridden by the `API_BASE_URL` environment variable.
 */
 const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

  const headers = new Headers();
  headers.append("Content-Type", "application/json");
   
    async function fetchJson(url, options) {
        try {
            const response = await fetch(url, options);
            if (response.status < 200 || response.status > 399) {
            throw new Error(`${response.status} - ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            if (error.name !== "AbortError") {
            throw error;
            }
        }
    }
  
    export async function findUser(user, signal) {
        const url = `${API_BASE_URL}/users`;
        const options = {
        method: "POST",
        headers,
        body: JSON.stringify({data: user}),
        signal,
        };
    return await fetchJson(url, options);
    }
    
    export async function createUser(user, signal) {
        const url = `${API_BASE_URL}/users/new`;
        const options = {
            method: "POST",
            headers,
            body: JSON.stringify({data: user}),
            signal,
        };
        return await fetchJson(url, options);
    }

    export async function checkAuth(signal) {
        const url = `${API_BASE_URL}/users`;
        const options = {
            method: "GET",
            headers: {
                "x-access-token": localStorage.getItem("token")
            },
            signal,
        };
        return await fetchJson(url, options);
    }
  
  