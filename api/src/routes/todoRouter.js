const { Router } = require('express')
const todoRouter = Router()

todoRouter.get('/', async (req, res) => {
    try {
        res.send('Hola Mili')
    } catch (error) {
        console.error(error.message);
    }
})

module.exports = todoRouter