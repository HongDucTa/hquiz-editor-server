const question = require('./routes/question')

module.exports = (app) => {
    app.use('/question', question)
}