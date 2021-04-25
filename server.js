const express = require("express");
const dotenv = require('dotenv');
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();

const connectDB = require("./server/database/connection");

dotenv.config({path:"config.env"});
let PORT = process.env.PORT
if(PORT == null || PORT == "")
{
    PORT = 3000;
}
// const host = '0.0.0.0';
//log requests
app.use(morgan('tiny'));

// MongoDB connection
connectDB();

// parse requests to body-parse
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")


// load assets
app.use("/css", express.static(path.resolve(__dirname,"assets/css")))
app.use("/img", express.static(path.resolve(__dirname,"assets/img")))
app.use("/js", express.static(path.resolve(__dirname,"assets/js")))

// load routers
app.use('/',require('./server/routes/router'))

app.listen(PORT,function(){
    console.log("Server started.......");
});
