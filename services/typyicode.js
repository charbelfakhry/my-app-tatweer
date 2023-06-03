const db = require("../DB/db");
const axios = require("axios");


const getTypyicode = async () => {

    try {
        const URL = `https://jsonplaceholder.typicode.com/posts`;
        const result = await axios.get(URL);
        console.log(result);
    } catch (error) {
        console.log(error);
    }

    return { message: "success" }

}





module.exports = {
    getTypyicode,

}