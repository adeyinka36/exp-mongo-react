const express = require('express');
const todoRouter = require('./routes');
const errorHandler = require('./middleware/error-handler');
const dotenv = require('dotenv').config()
const DB = require('./config/db');
const bodyParser =  require('body-parser');
const app = express();

DB();



app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(todoRouter)

app.use(errorHandler)


app.listen(7000, ()=>{
   console.log(`App is listening on port 7000`)
})