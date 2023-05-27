const db = require("../DB/db");
const { formatDate } = require("../helper");

const getProducts = async () => {

    const sql = `SELECT * FROM products 
    JOIN suppliers ON products.supplier_id = suppliers.supplier_id 
    JOIN categories ON categories.category_id = products.category_id;`;
    try {
        const users = await db.query(sql);
        return users
    } catch (error) {
        console.error(error);
        return { message: "internal error" }
    }
}




module.exports = {
    getProducts,
}