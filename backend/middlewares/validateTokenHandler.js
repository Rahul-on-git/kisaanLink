const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const validateToken = asyncHandler(async (req, res, next)=>{
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;

    if(authHeader && authHeader.startsWith('Bearer')){
        token = authHeader.split(" ")[1];

        jwt.verify(token, "kisaanLink", (err, decoded)=>{
            if(err){
                res.status(401);
                throw new Error("user is not authorized");
            }
            req.Farmer = decoded.Farmer;
            next();
        })

        if(!token){
            res.status(401);
            throw new Error("User is not authorized or token is missing");
        }
    }
});

module.exports = validateToken;