const express = require('express');
const app = express();
port = 3001;

const auth = require("./routes/auth");

/**
 * Get. to get information. login, checkUser.
 * POST. INSERT
 * PUT. FOR UPDATE.
 * DELETE delete an entity
 */

app.get("/", (req, res)=>{
    res.json({message: "ok from the server side."})
});

app.use("/api/auth/", auth);

app.listen(port, () =>{
    console.log(`my app is running on the port ${port}`)
})