const app = require('./src/app')
const mongoose = require('mongoose')

const PORT = 5000

mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://admin:ferrari12@cluster0.rqttb93.mongodb.net/node-api?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    
    app.listen(PORT, () => {
        console.log(`App listening port: ${PORT}`);
    })

    console.log('Connected to MongoDB');

})
.catch((error) => {
    console.log(error);
})