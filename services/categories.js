const db = require("../DB/db");
const { formatDate } = require("../helper");

const getCategories = async () => {

    const sql = `SELECT * FROM categories`;
    try {
        const users = await db.query(sql);
        return users
    } catch (error) {
        console.error(error);
        return { message: "internal error" }
    }
}





module.exports = {
    getCategories,
    
}