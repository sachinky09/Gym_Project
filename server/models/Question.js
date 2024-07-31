const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    name: String,
    message: String,
    date: { 
        type: Date,
        default: Date.now
    }
});


const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;