const app = require('./src/app')
const mongoose = require('mongoose')
require('dotenv').config() // Despues de instalar "dotenv" tengo que poner esto para que acceder a los archivos de .env

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT

mongoose.set("strictQuery", false)
mongoose.connect(MONGO_URL)
    .then(() => {

        app.listen(PORT, () => {
            console.log(`App listening port: ${PORT}`);
        })

        console.log('Connected to MongoDB');

    })
    .catch((error) => {
        console.log(error);
    })