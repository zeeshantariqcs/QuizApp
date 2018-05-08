const mongoose = require('mongoose');

const schema = mongoose.Schema({
    question: String,
    options:[],
    correct_answer:Number
}, {
    timestamps: false
});


module.exports = mongoose.model('Question', schema, 'questions');


