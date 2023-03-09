const mongoose = require('mongoose');
const mongouri = "mongodb://localhost:27017/"
mongoose.set('strictQuery', false);
const connecttomongo = () => {
    mongoose.connect(mongouri,()=>{
        console.log("connected to mongo success");
    })
}

module.exports = connecttomongo;