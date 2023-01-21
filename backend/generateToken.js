//the second parameter in jwt.sign is secret key
const jwt =require('jsonwebtoken');

const generateToken=(id)=>{
    return jwt.sign({id},'product123',{
        expiresIn:'30d',
    });

};
module.exports=generateToken;