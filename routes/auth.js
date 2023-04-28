const express = require("express");
const { register, login, authenticate } = require("../services/auth");
const router = express.Router();

router.post("/authenticate", async(req, res)=>{
    const {data} = req.body;
    // check if the variable email is not null and not undefined
    //validation 
    if(!data){
        res.status(400).json({message: "Bad Request!"});
    }
    const result = await authenticate(data);
    console.log(result);
    if(result.status === 200){
        res.status(200).json(result.message, result.user);
    }
    //inappropriate request
    res.status(result.status).json(result.message);

});

router.post("/register", (req, res)=>{
    res.status(200).json(register(req.query));
});

module.exports = router;