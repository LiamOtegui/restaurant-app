const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: false })) // Para que se pueda usar "Form-encode" en el body y no solo formato "JSON" para el controller "PUT" de la ruta de productRouter.
app.use(cors())
app.use(router)

module.exports = app