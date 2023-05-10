const express = require("express");
const { getAllUsers, deleteUser } = require("../services/users");

const router = express.Router();

router.get("/getAllUsers", async(req, res)=>{

    const result = await getAllUsers();
    if(result){
        res.status(200).json(result);
    }
    //inappropriate request
    res.status(500).json("error retrieving user");

});

router.post("/deleteUser", async(req, res) =>{
    console.log(req);
    const {id} = req.body;
    deleteUser(id);
})

router.post("/register", (req, res)=>{
    res.status(200).json(register(req.query));
});

module.exports = router;