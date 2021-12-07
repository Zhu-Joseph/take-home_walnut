const service = require("./users.service")
const jwt = require("jsonwebtoken")

function auth(req, res, next) {
    const token = req.headers["x-access-token"]

    if(!token) {
        res.send("Need token")
    } else {
        jwt.verify(token, "jwtSecret", (err, decoded) => {
            if(err) {
                res.json({auth:false, message:"Wrong authorization"})
            } else {
                console.log("User is authorized")
                req.userId = decoded.id
            }
        })
    }
}

async function findUser(req, res, next) {
    const data = await service.find(req.body.data)
    if(!data) {
        res.json({auth: false, message: "Invalid username or password"})
    } 
    else {
        const id = data.id
        const token = jwt.sign({id}, "jwtSecret", {expiresIn: 500})
        res.json({auth: true, token: token, data: data})
    }
}

async function createUser(req, res, next) {
    const data = await service.create(req.body.data)
    res.status(201).json({data})
}

module.exports = {
    auth,
    findUser,
    createUser
}