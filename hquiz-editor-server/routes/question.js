const express = require('express');
const router = express.Router();
const questionControllers = require('../controllers/question')

router.get('/fetchAll', questionControllers.fetchAllQuestions);

router.get('/fetch/:id', questionControllers.fetchQuestion);

router.post('/add', questionControllers.addQuestion)

router.put('/update/:id', questionControllers.updateQuestion)

router.delete('/delete/:id', questionControllers.deleteQuestion)

module.exports = router;