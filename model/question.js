const mongoose = require('mongoose');

const quizQuestion = new mongoose.Schema({
    question:{
        type: String,
        required:true
    },
    ans1:{
        type: String,
        required:true
    },
    ans2:{
        type: String,
        required: true
    },
    ans3:{
        type: String,
        required:true
    },
    ans4:{
        type: String,
        required:true
    },
    correctAns:{
        type: String,
        required:true
    }
},{
    timestamps:true
}
)



module.exports =mongoose.model('Questions', quizQuestion)