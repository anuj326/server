const Users =  require('../model/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.login = async function(req, res){

    const {email , password} = req.body;
     const secret = process.env.SECRET_KEY;
    const userLogin = await Users.findOne({email: email});
   // console.log(userLogin);
   
    

   if(!userLogin){
        console.log('Invalid username or password');
        res.status(400).json({message:'Invalid username or password'})
    }else{
        console.log(password);
        const isMatch = bcrypt.compareSync(password, userLogin.password); ;
    if(!isMatch){
        console.log('Invalid username or password');
        res.status(400).json({message:'Invalid username or password'})
    }else{
        jwt.sign({email,id:userLogin._id},secret , {} , (err,token)=>{
            if(err) throw new err;
            //console.log(token);
            res.status(200).cookie('token',token).json({
                id:userLogin._id,
                email,
                token,
            })
        })
       // console.log('logged in successfully');
       // res.status(200).json({message:"logged in successfully"})
        
    }
}
  


}