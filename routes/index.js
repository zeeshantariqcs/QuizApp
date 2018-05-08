const express = require('express');
const router = express.Router();
const Question = require('../models/question');


/* GET home page. */
router.get('/', function (req, res, next) {
    Question.find({}, function (err, questions) {
        if (err) {
            res.render('error', {error: err, message: "Error Occurred!"});
        } else {
            res.render('index', {title: 'SIMPLE QUIZ APPLICATION', error: err, questions: questions});
        }
    });
});


/***
 * @purpose: QUIZ POST REQUEST HANDLER
 */
router.post('/quiz', function (req, res, next) {
    if (typeof req.body !== "undefined") {
        Question.find({}, function (err, questions) {
            if (err) {
                res.render('error', {error: err, message: "Error Occurred!"});
            } else {
                let score = 0;
                if (typeof questions !== "undefined" && questions.length > 0) {
                    let index = 0;
                    let selected_answers = req.body;
                    for (var ind in selected_answers) {
                        if (selected_answers[ind] == questions[index].correct_answer) {
                            score += 10;
                        }
                        index++;
                    }
                }
                res.render('score-card', {title: 'QUIZ SCORE', error: err, total_score: questions.length*10,earned_score:score});
            }
        });
    } else {
        return res.json("Please select the options.");
    }
});


module.exports = router;
