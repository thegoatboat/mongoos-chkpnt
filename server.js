const express = require('express');
const connectddb = require('./config/connectdb');
const contactRouter = require('./routes/contact');
const app = express();

const port=process.env.port;

require('dotenv').config()
//link database
connectddb()
app.use(express.json())
app.use('/api/user',contactRouter)



app.listen(port,err=>{
    err?console.log(err):console.log(`you are contected to ${process.env.port}`)
})
