const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');

const app = express();

dotenv.config({ path: '.env' });

require('./db/conn');

const user = require('./model/userSchema');

app.use(express.json());

app.use(require('./router/auth'));


const PORT = process.env.PORT || PORT;

// app.get('/', (req, res) => {
//     res.send("Hello world");
// });
// app.get('/about',(req,res)=>{
//     res.send("hello from backend side!");
// })

app.listen(PORT, (req, res) => {
    console.log(`****Server Running in ${process.env.DEV_MODE} mode on port ${PORT}****`);

})