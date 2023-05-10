const db = require("../DB/db");
const { formatDate } = require("../helper");




const getAllUsers = async () => {
    
    const sql = `SELECT client_id as id, concat(client_first_name, " ", client_last_name) as name, client_email as email, client_mobile as phone FROM client`;
    try{
        const users = await db.query(sql);
        return users
    }catch(error){
        console.error(error);
        return {message: "internal error"}
    }
}

const deleteUser = async (id) => {
    const sql = `DELETE FROM client WHERE client_id = ?`;
    try{
        await db.query(sql, [id]);
        return {message: "deleted succssfully!"};
    }catch(error){
        console.error(error);
        return {message: "internal error"};
    }
}


module.exports ={
    getAllUsers,
    deleteUser,
}