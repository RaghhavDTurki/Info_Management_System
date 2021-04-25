const mongoose = require("mongoose");

const connectDB = async() =>{
    try {
        //mongodb connection string
        const con = await mongoose.connect("mongodb+srv://admin:raghhavdturki@cluster0.c3tgj.mongodb.net/users?retryWrites=true&w=majority",{
            useNewUrlParser:true,
            useFindAndModify:false,
            useUnifiedTopology:true,
            useCreateIndex:true
        })

        console.log(`MongoDB connected: ${con.connection.host}`)
    } catch (err) {
        console.log(err);        
        process.exit(1);
    }
}

module.exports = connectDB