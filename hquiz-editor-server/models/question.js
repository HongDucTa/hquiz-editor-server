const mongoose = require('mongoose')

const Question = mongoose.model('Question', {
    question: String,
    answers: {
        answerA: String,
        answerB: String,
        answerC: String,
        answerD: String,
        answerE: String,
        answerF: String,
    },
    multipleCorrectAnswers: Boolean,
    correctAnswers: {
        answerA: Boolean,
        answerB: Boolean,
        answerC: Boolean,
        answerD: Boolean,
        answerE: Boolean,
        answerF: Boolean,
    },
    tags: [String],
    difficulty: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard']
    },
    date: Date,
    lastUpdate: Date
})

module.exports = Question