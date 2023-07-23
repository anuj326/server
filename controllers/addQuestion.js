const Question = require('../model/quiz');
module.exports.addQuestion = async function(req, res){
 
    const { question, options, correctAnswer } = req.body;

    const questionExist = await Question.findOne({question:req.body.question})
  if(questionExist){
    return res.status(422).json('Question already exist')
  }
  // Create a new question document using the Question model
  const newQuestion = new Question({
    question,
    options,
    correctAnswer,
  });

  // Save the new question to the database
   await newQuestion.save();
   res.status(200).json({message:'Question has been Added'})
    

}