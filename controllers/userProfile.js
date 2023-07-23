const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.userProfile = function(req, res){
    const secret = process.env.SECRET_KEY;
   // console.log('inside profile page');
   const {token} = req.cookies;
   //console.log('Secret Key ' + secret + ' Token' + token);
   jwt.verify(token , secret , {}, (error , info) => {
        if(error) throw error;
        res.json(info);
   })
    
}

