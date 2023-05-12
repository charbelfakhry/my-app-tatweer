const express = require("express");
const { getAllUsers, deleteUser, insertUser } = require("../services/users");
const router = express.Router();

router.get("/getAllUsers", async (req, res) => {
  const result = await getAllUsers();
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(500).json("Error retrieving users");
  }
});

router.post("/insertUser", async (req, res) => {
    const {user} = req.body;
    console.log(user);
    insertUser(user);
})

router.post("/deleteUser", async (req, res) => {
  const {id} = req.body;
  try{
    res.status(200).json({message: "deleted succssfully"});
  }catch(error){
    res.status(500).json({message: "error occured while deleting the record."});
  }
  const result = await deleteUser(id);

});

// router.delete("/deleteUser/:id", async (req, res) => {
//     const id = req.params.id;
//     console.log(id);
//     // Add your logic to delete the user using the provided ID
//   });

router.post("/register", (req, res) => {
  res.status(200).json(register(req.query));
});

module.exports = router;
