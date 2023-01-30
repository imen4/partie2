const express = require("express");
require("dotenv").config({path:"./config/.env"});
const connectDB = require('./config/connectDB');
const authRouter = require('./routes/Auth')
const produitRouter = require('./routes/produitRoutes')
const commandRouter = require('./routes/commandRoutes')

//connect db
connectDB()

const app = express();
//middleware 
app.use(express.json())

//use Routes
app.use('/api/auth',authRouter)
app.use('/api/product',produitRouter)
app.use('/api/command',commandRouter)

const PORT = process.env.PORT || 5001 ; 

app.listen(PORT,(err)=>{
    err? console.log(err)
    :console.log(`server is runnig on port ${PORT}`)
})