const question = require('../model/quiz');
module.exports.quiz = async function(req, res){
        console.log('Inside question fetch');
        const data = await question.find({})

            if(!data){
                console.log('Error');
            }
            // console.log(data[1].question);   
             return res.status(200).json(data)
           };
        