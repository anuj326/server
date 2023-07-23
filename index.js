const express = require('express');
const db = require('./mongoose/mongoose');
const { userData } = require('./controllers/userData');
const { login } = require('./controllers/login');
const { userProfile } = require('./controllers/userProfile');
const port = process.env.PORT || 8000;
const app = express();
const cookieParser = require('cookie-parser');
const { userLogout } = require('./controllers/userLogout');
const { addQuestion } = require('./controllers/addQuestion');
const { quiz } = require('./controllers/quiz');
const { quizSubmit } = require('./controllers/quizSubmit');
const { verifyUser } = require('./middelware/verifyUser');
require('dotenv').config();

// app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());


app.get('/', function(req, res){
    return res.send('Welcome HOme')
})
    
app.post('/register', userData);
app.post('/signin',login)
app.post('/profile' ,userProfile);
app.post('/logout', userLogout );
app.post('/addQuestion', addQuestion);
app.get('/quiz',verifyUser , quiz);
app.post('/submit-quiz' ,quizSubmit);


app.listen(port,function(err){
    if(err){
        console.log("Expres server error");
        return;
    }
    console.log("express server is running");
})