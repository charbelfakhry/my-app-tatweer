

const register = (params) =>{
    let user = {
        Email: params.email,
        FirstName: params.fn,
        LastName: params.ln,
        DateOfBirth: params.dob,
    }
    return user;
}

const login = (email) =>{
    if(email === "test@test.com"){
        return {status: 200, message: "Ok Authenticated"}
    }
    return {status: 401, message: "Bad Request! You are not authenticated"}
}


module.exports ={
    register,
    login,
}