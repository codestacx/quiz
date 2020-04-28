const express = require("express");
const router = express.Router();
const Quiz = require("../models/Quiz");
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
