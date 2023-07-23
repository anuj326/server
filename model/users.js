const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userDataSchema = new mongoose.Schema({
    fname:{
        type: String,
        required:true
    },
    date:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    }
},{
    timestamps:true
}
)

//hash password
userDataSchema.pre('save', async function(next){
   // console.log('inside Hash password')
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(this.password , salt);
        this.password = hashPassword;
        //console.log(this.password);
    } catch (error) {
        next(error);
    }
})

module.exports =mongoose.model('Users', userDataSchema)

