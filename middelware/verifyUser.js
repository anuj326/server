const jwt = require('jsonwebtoken');
const User = require('../model/users');
module.exports.verifyUser = async function(req, res , next){
    // const token = req.header('authorization');
    const {token} = req.cookies;
    const secret = 'sajshasg78965196AFH!&FHGJy';
    const decode = jwt.decode(token);
    console.log('user',decode);
    console.log('Inside verify token '+ token );
    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
  
        jwt.verify(token, secret , {}, (err, decoded) => {
        if (err) {
        /// console.log('error in token',err);
            return res.status(403).json({ message: 'Invalid token.' });
        }
      req.user = decoded;
      console.log('Aceesss Granted');
      next();
    });

    // try {
    //   const token = req.cookie;
    //   const secret = 'sajshasg78965196AFH!&FHGJy';
    //   const verifyToken = jwt.verify(token, secret);
    //   const rootUser = await User.findOne({_id: verifyToken._id,"tokens:token":token})
    //   if(!rootUser){throw new Error('User not found')}
    //   req.token = token;
    //   req.rootUser = rootUser;
    //   req.userID = rootUser._id;

    //   next();
    // } catch (error) {
    //   res.status(401).send('Unauthorized:No Token Provided')
    //   console.log(error);
    // }
  };