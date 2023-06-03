const db = require("../DB/db");
const axios = require("axios");


const getTypyicode = async () => {

    try {
        const URL = `https://jsonplaceholder.typicode.com/posts`;
        const result = await axios.get(URL);

        const posts = result.data;


        let startTime = new Date().getTime(); //ms

        for (let n = 0; n < 100; n++) {
            let sql = ``;
            for (let i = 0; i < posts.length; i++) {
                const post = posts[i];
                const { userId, id, title } = post;

                sql += `INSERT INTO typicode (user_id, id, title, body) VALUES ("${userId}", "${id}", "${title}", "${post.body}")`;
                
                const dbres = await db.query(sql, [userId, id, title, post.body]);
                console.log(dbres);
            }
        }

        let endTime = new Date().getTime();

        let elapsedTime = endTime - startTime;

        console.log(elapsedTime);


    } catch (error) {
        console.log(error);
    }

    return { message: "success" }

}





module.exports = {
    getTypyicode,

}