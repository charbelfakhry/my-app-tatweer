const express = require("express");
const { register, login } = require("../services/auth");
const router = express.Router();

router.get("/login", (req, res)=>{
    const {email} = req.query;
    // check if the variable email is not null and not undefined
    if(!email){
        res.status(400).json({message: "Bad Request!"});
    }
    const result = login(req.query.email);
    if(result.status === 200){
        res.status(result.status).json(result.message);
    }
    res.status(result.status).json(result.message);

});

router.post("/register", (req, res)=>{
    res.status(200).json(register(req.query));
});

module.exports = router;