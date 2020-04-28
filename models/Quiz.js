const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    question:[
        {
            question:{
                type:String,
            },
            questionid:{
                type:String
            },
            meta:{
                type:Object,
                next_question:{
                    type:String,

                }
            },
            question_type:{
                type:String
            },
            answer_options:[]
        }
    ],
    answer:[
        {
            questionid:{
                type:String
            },
            answer:{
                type:String,
            },
             
            feedback:{
                type:String
            }
        }
    ]
        
    
})

module.exports = Quiz = mongoose.model('quiz', QuizSchema);
