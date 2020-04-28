const express = require("express");
const router = express.Router();
const Quiz = require("../models/Quiz");


router.post(
  '/quiz',
  async (req, res) => {
    
    const { title, description } = req.body;

    try {
      // See if user exists
      
       

        const questions = [
          {
              question:'Using the declaration below, what will be the final element of the array? int [ ] grades = new int[35]?',
              questionid:'1',
              meta:{
                  next_question:'2'
              },
              question_type:'multiple_choice',
              answer_options:['Grades[0]',
              'Grades[34]',
              '"Grades[35]','Impossible to tell']
                      
            },
            {
              question:'It is the Java keyword that creates inheritance? ',
              questionid:'2',
              meta:{
                  next_question:'3'
              },
              question_type:'multiple_choice',
              answer_options:['Enlarge','Extends','Inherits','Inheritance']
                      
            },
            {
              question:'It is the rule of a programming language?',
              questionid:'3',
              meta:{
                  next_question:'4'
              },
              question_type:'multiple_choice',
              answer_options:['Format','Login','Object','Syntax']
                      
            },
            {
              question:'It is the code/s inside a pair of curly braces?',
              questionid:'4',
              meta:{
                 next_question:'5'
              },
              question_type:'multiple_choice',
              answer_options:["Block",'Brick','Function','Method']
                      
            },
            {
              question:'"If A=10, then after B=++A, the value of B is _______',
              questionid:'5',
              meta:{
                 next_question:'6'
              },
              question_type:'multiple_choice',
              answer_options:['10','11','12','13']
                      
            },
            {
              question:'It is the characteristics of Java which ensures that a program can go only where it is designed to go and eliminates the possibility of altering system data unintentionally?',
              questionid:'6',
              meta:{
                 next_question:'7'
              },
              question_type:'multiple_choice',
              answer_options:['Java is simple','Java is secure','Java is free','Java is portable']
                      
            },
            {
              question:'It is a form of Java program that runs locally on the command line A?',
              questionid:'7',
              meta:{
                 next_question:'8'
              },
              question_type:'multiple_choice',
              answer_options:['Applets','Application','Midlets','Servlets']
                      
            },
            {
              question:'It defines the common variables and methods of a set of objects?',
              questionid:'8',
              meta:{
                 next_question:'9'
              },
              question_type:'multiple_choice',
              answer_options:['Objects','Classes','"Functions','Methods']
                      
            },
            {
              question:'It is the process of removing errors found in the program?',
              questionid:'9',
              meta:{
                 next_question:'10'
              },
              question_type:'multiple_choice',
              answer_options:['Editing','Dubugging','Compiling','Running']
                      
            },
            {
              question:'Which symbol is used to denote a multi-line comment?',
              questionid:'10',
              meta:{
                 next_question:'11'
              },
              question_type:'multiple_choice',
              answer_options:[' // ',' /**/ ',' {} ','&lt;&gt;']
                      
            },
            {
              question:'Which of the following is not a unary operator?',
              questionid:'11',
              meta:{
                 next_question:'12'
              },
              question_type:'multiple_choice',
              answer_options:['Negation','Decrement','Bitwise Complement','Assignment']
                      
            },
            {
              question:'Which of the following is not a Java keyword?',
              questionid:'12',
              meta:{
                 next_question:'13'
              },
              question_type:'multiple_choice',
              answer_options:['default','For','Volatile','of']
                      
            },
            {
              question:'Which of the following is an invalid first character of an identifier?',
              questionid:'13',
              meta:{
                 next_question:'14'
              },
              question_type:'multiple_choice',
              answer_options:['__','$','A','8']
                      
            },
            {
              question:'It is the length of the data type short?',
              questionid:'14',
              meta:{
                 next_question:'15'
              },
              question_type:'multiple_choice',
              answer_options:['8 bits','16 bits','32 bits','64bits']
                      
            },
            {
              question:'Which of the following is an invalid variable declaration in Java?',
              questionid:'15',
              meta:{
                 next_question:'16'
              },
              question_type:'multiple_choice',
              answer_options:['Int NumberOfStudents = 250;','Double Salary =0.0;','String NAME =','Char CivilStatus =']
                      
            },
            {
              question:'String is a primitive data type?',
              questionid:'16',
              meta:{
                 next_question:'17'
              },
              question_type:'multiple_choice',
              answer_options:['True','False']
                      
            },
            {
              question:'_____ the length of the data type float',
              questionid:'17',
              meta:{
                 next_question:'18'
              },
              question_type:'text',
              answer_options:[]
                      
            },
            {
              question:'_______ is the data type used for a single character ',
              questionid:'18',
              meta:{
                 next_question:'19'
              },
              question_type:'text',
              answer_options:[]
                      
            },
            {
              question:'What syntax elimiates every line of code in Java?',
              questionid:'19',
              meta:{
                 next_question:'20'
              },
              question_type:'text',
              answer_options:[]
                      
            },
            {
              question:'What will be the output of the following code?',
              questionid:'20',
              meta:{
                 next_question:'-1'
              },
              question_type:'multiple_choice',
              answer_options:['123','Error','321','None of the above']
                      
            },
            
        ]

        const answers = [
          {
              questionid:'1',
               answer : 'b',
              
              feedback:'Sorry, that is incorrect! The correct answer is Grades[34]'
          },
          {
              questionid:'2',
              answer : 'b',
              
              feedback:'Sorry, that is incorrect! The correct answer is Extends'
          },
          {
              questionid:'3',
               answer : 'd',
              
              feedback:'Sorry, that is incorrect! The correct answer is Syntax.'
          },
          {
              questionid:'4',
               answer : 'a',
            
              feedback:'Sorry, that is incorrect! The correct answer is Block'
          },
          {
              questionid:'5',
               answer : 'b',
              
              feedback:'Sorry, that is incorrect! The correct answer is 11'
          },
          {
              questionid:'6',
               answer : 'b',
            
              feedback:'Sorry, that is incorrect! The correct answer is Java is secure'
          },

          {
            questionid:'7',
             answer : 'b',
            
            feedback:'Sorry, that is incorrect! The correct answer is Application'
        },
        {
            questionid:'8',
            answer : 'b',
            
            feedback:'Sorry, that is incorrect! The correct answer is Class'
        },
        {
            questionid:'9',
             answer : 'b',
            
            feedback:'Sorry, that is incorrect! The correct answer is Debugging'
        },
        {
            questionid:'10',
             answer : 'b',
          
            feedback:'Sorry, that is incorrect! The correct answer is /* */'
        },
        {
            questionid:'11',
             answer : 'd',
            
            feedback:'Sorry, that is incorrect! The correct answer is Assignment'
        },
        {
            questionid:'12',
             answer : 'd',
          
            feedback:'Sorry, that is incorrect! The correct answer is Of'
        },
        {
          questionid:'13',
           answer : 'd',
        
          feedback:'Sorry, that is incorrect! The correct answer is 8'
      },
      {
        questionid:'14',
         answer : 'b',
      
        feedback:'Sorry, that is incorrect! The correct answer is 16 bits '
    },  
    
    {
      questionid:'15',
       answer : 'd',
    
      feedback:'Sorry, that is incorrect! The correct answer is Char CivilStatus ='
  }, 
  {
    questionid:'16',
     answer : 'a',
  
    feedback:'Sorry, that is incorrect! The correct answer is True'
}, 
{
  questionid:'17',
   answer : '32 bits',

  feedback:'Sorry, that is incorrect! The correct answer is 32 bits'
}, 
{
  questionid:'18',
   answer : 'Char',

  feedback:'Sorry, that is incorrect! The correct answer is Char'
}, 

{
  questionid:'19',
   answer : ';',

  feedback:'Sorry, that is incorrect! The correct answer is ;'
}, 
{
  questionid:'20',
   answer : 'c',

  feedback:'Sorry, that is incorrect! The correct answer is 321'
}
        ]
       
      const newAnswer  = {
          questionid:'1',
          user_answer : 'a',
          correct:true,
          feedback:'correct answer is a'
      }  

      let quiz = new Quiz({
        title,description,question:questions,answer:answers
      });

      // Encrypt password
      await quiz.save();
      // const id = quiz.id;

     

  
      //   quiz.question.unshift(newQuestion);
      //   await quiz.save();

        res.json(quiz)

      
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);




// fetch the list of all quizzes
router.get("/quiz/list", async (req, res) => {
  try {
    const response = await Quiz.find().select("_id title description");
    //res.json({'status':200})

    return res.json(response);
  } catch (error) {
    res.json(error.message);
  }
});

// fetch the quiz by its id
router.get("/quiz/:quizid", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.quizid);
    //res.json({'status':200})
    if (quiz) {
      return res.json({
        id: quiz._id,
        title: quiz.title,
        description: quiz.description,
        total_questions: quiz.question.length,
      });
    } else {
      return res.json({ status: 404 });
    }
  } catch (error) {
    res.json(error.message);
  }
});

// fetch the quiz by id and its question by its id
router.get("/quiz/:quizid/:questionid", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.quizid); // if quiz exists
    if (!quiz) {
      return res.json({ status: "no quiz found", error: true });
    }
    const ques = quiz.question.find(
      (q) => q.questionid === req.params.questionid
    );

    if (!ques) {
      return res.json({ status: "no question found", error: true });
    }

    return res.json(ques);
  } catch (error) {
    res.json(error);
  }
});

// check the answer of quiz followed by question id and the answer
router.get("/check_answer/:quizid/:questionid/:answer", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.quizid);
    if (!quiz) {
      return res.json({ status: "no quiz found", error: true });
    }

    const ques = quiz.question.find(
      (q) => q.questionid === req.params.questionid
    );

    if (!ques) {
      return res.json({
        status: `no question assosiated with id ${req.params.questionid} found`,
        error: true,
      });
    }

    const user_answer = req.params.answer;

    const response = {};
    response.question_id = req.params.questionid;
    response.user_answer = user_answer;

    const correct_answer = quiz.answer.find(
      (ans) => ans.questionid === req.params.questionid
    );
    //  return res.json(correct_answer)
    const status =
      correct_answer.answer.toUpperCase() === user_answer.toUpperCase();
    response.correct = status ? true : false;

    if (!status) {
      response.feedback = correct_answer.feedback;
    }
    return res.json(response);
  } catch (error) {}
});

//call only once when the quiz is started => helper to fetch the very first question to start quiz
router.get("/quiz/question/:quizid", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.quizid);
    //res.json({'status':200})
    if (quiz) {
      return res.json(quiz.questions[0]);
    } else {
      return res.json({ status: 404 });
    }
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = router;
