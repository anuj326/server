const Users =  require('../model/users');

module.exports.userData = async function(req,res){

       const  {fname , date , email , password } = req.body;
       
       if(!fname || !date || !email || !password){
        console.log(fname , date , email , password);
        console.log('All fields are required');
        return res.status(422).json({error:'All fields are required'})
       }
        const userExist = await Users.findOne({email:req.body.email})
        if(userExist){
            return res.status(422).json({error:'email already registered'})
        }
        const users = new Users({
            fname: req.body.fname,
            date: req.body.date,
            email: req.body.email,
            password: req.body.password
        })
       
        
     
    await users.save();
 
    
    return res.send('Hello word') 
}