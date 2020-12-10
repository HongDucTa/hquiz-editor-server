const { ObjectId } = require('mongodb')
const Question = require('../models/question')

const fetchAllQuestionsService = async () => {
    try {
        const res = await Question.find({})
        return res
    } catch (e) {
        throw new Error(e.message)
    }
}

const fetchQuestionService = async (id) => {
    try {
        const res = await Question.find({ _id: ObjectId(id) })
        return res
    } catch (e) {
        throw new Error(e.message)
    }
}

const addQuestionService = async (question, answers, multipleCorrectAnswers, correctAnswers, tags, difficulty) => {
    try {
        const newQuestion = new Question({
            question: question,
            answers: answers,
            multipleCorrectAnswers: multipleCorrectAnswers,
            correctAnswers: correctAnswers,
            tags: tags,
            difficulty: difficulty,
            date: new Date(),
            lastUpdate: new Date()
        })

        const savedQuestion = newQuestion.save((err) => {
            if (err) throw new Error("Failed to add question")
        })

        return savedQuestion

    } catch (e) {
        throw new Error(e.message)
    }
}

const updateQuestionService = async (id, question, answers, multipleCorrectAnswers, correctAnswers, tags, difficulty) => {
    try {
        await Question.updateOne({ _id: ObjectId(id) }, {
            question: question,
            answers: answers,
            multipleCorrectAnswers: multipleCorrectAnswers,
            correctAnswers: correctAnswers,
            tags: tags,
            difficulty: difficulty,
            lastUpdate: new Date()
        }, (err) => {
            if (err) throw new Error("Failed to update question")
        })
    } catch (e) {
        throw new Error(e.message)
    }
}

const deleteQuestionService = async (id) => {
    try {
        await Question.deleteOne({ _id: ObjectId(id) },
            (err) => {
                if (err) throw new Error("Failed to delete question")
            })
    } catch (e) {
        throw new Error(e.message)
    }
}

module.exports = {
    fetchAllQuestionsService,
    fetchQuestionService,
    addQuestionService,
    updateQuestionService,
    deleteQuestionService
}