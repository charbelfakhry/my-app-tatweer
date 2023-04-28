const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
port = process.env.PORT || 3001;

// app.use(express.json);
// app.use(
//     express.urlencoded({
//         extended: true,
//     })
// );

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Allow all CORS request
app.use(cors({origin: '*'}));

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