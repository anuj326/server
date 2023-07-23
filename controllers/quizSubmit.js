const Question = require('../model/quiz');
module.exports.quizSubmit = async function(req, res){
    
    const submittedAnswers = req.body;
    const questionIds = Object.keys(submittedAnswers);
  
    try {
      const questions = await Question.find({ _id: { $in: questionIds } });
  
      const result = questions.map((question) => ({
        _id: question._id,
        isCorrect: question.correctAnswer === submittedAnswers[question._id],
      }));
  
      res.json(result);
    } catch (err) {
      console.error('Error checking answers:', err);
      res.status(500).json({ error: 'An error occurred while checking answers.' });
    }
  }