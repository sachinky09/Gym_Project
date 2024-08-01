const mongoose = require('mongoose');

// TODO: schema validation

const QuestionSchema = new mongoose.Schema({
    name: String,
    question: {
        type: String,
        required: true,
    },
    date: { 
        type: Date,
        default: Date.now
    },
    answer: {
        type: String,
        default: null
    }
});


const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;