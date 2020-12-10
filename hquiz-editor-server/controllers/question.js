const { addQuestionService, fetchAllQuestionsService, fetchQuestionService, updateQuestionService, deleteQuestionService } = require('../services/question')

const fetchAllQuestions = async (req, res, next) => {
    try {
        const questions = await fetchAllQuestionsService()
        res.send(questions)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) & next(e)
    }
}

const fetchQuestion = async (req, res, next) => {
    try {
        const { id } = req.params
        const question = await fetchQuestionService(id)
        res.send(question)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) & next(e)
    }
}

const addQuestion = async (req, res, next) => {
    const { question, answers, multipleCorrectAnswers, correctAnswers, tags, difficulty } = req.body
    try {
        await addQuestionService(question, answers, multipleCorrectAnswers, correctAnswers, tags, difficulty)
        res.sendStatus(201)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) & next(e)
    }
}

const updateQuestion = async (req, res, next) => {
    const { question, answers, multipleCorrectAnswers, correctAnswers, tags, difficulty } = req.body.question
    const { id } = req.params
    try {
        await updateQuestionService(id, question, answers, multipleCorrectAnswers, correctAnswers, tags, difficulty)
        res.sendStatus(204)
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) & next(e)
    }
}

const deleteQuestion = async (req, res, next) => {
    const { id } = req.params
    try {
        await deleteQuestionService(id)
        res.sendStatus(204)
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) & next(e)
    }
}

module.exports = {
    fetchAllQuestions,
    fetchQuestion,
    addQuestion,
    updateQuestion,
    deleteQuestion
}