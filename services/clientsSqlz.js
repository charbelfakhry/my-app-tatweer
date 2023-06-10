// CRUD
const Client = require("../model/Client");

// create client
const createClient = async (firstName, lastName, username, password, email, mobile, address, gender, dob) =>{

    try{
        const newClient = await Client.create({firstName, lastName, username, password, email, mobile, address, gender, dob});
        return newClient.toJSON();
    }catch(e){
        console.error('Error creating client', error);
    }

}

const getAllClients = async () =>{
    try{
        const client = await Client.findAll();
        return client;
    }catch(e){
        console.error(e);
    }
}

const getClientById = async (id) =>{
    try{
        const client = await Client.findByPk(id);
        if(client){
            return client;
        }
        return "user not found";
    }catch(error){
        console.error(error);
    }
}

const updateClient = async (id, firstName, lastName, username, password, email, mobile, address, gender, dob) => {
    try{
        // fetched the user to update
        const client = await Client.findByPk(id);
        
        if(client){
            
            client.firstName = firstName;
            client.lastName = lastName,
            client.username = username,
            client.password = password;
            client.email = email;
            client.mobile = mobile;
            client.address = address,
            client.gender = gender;
            client.dob = dob;

            const updatedClient = await client.save();
            return updatedClient.toJSON();
        }
    }catch(error){
        console.error(error);
    }
}

const deleteClient = async(id) =>{
    try{
        const client = await Client.findByPk(id);
        if(client){
            const deletedClient = await client.destroy();
            return deletedClient.toJSON();
        }
    }catch(error){
        console.error(error);
    }
}

const authenticateClient = async (username, password) => {
    try{
        const client = await Client.findOne({where: {client_username: username}});
        if(client){
            if(client.password === password){
                return client.toJSON();
            }
            return "Not authenticated";
        }

        return "Client Not found";

    }catch(error){
        console.error(error);
    }
}

module.exports = {
    createClient,
    getAllClients,
    getClientById,
    updateClient,
    deleteClient,
    authenticateClient,
}

