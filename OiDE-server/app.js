const express = require('express');
const app = express();
const API = require('./routes/handleapi.js');
const cors = require('cors');
const bodyParser = require('body-parser')
require('dotenv').config()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(cors());
app.use('/api',API)

app.listen(process.env.PORT||5000,()=>{
    console.log(`Server live ${process.env.PORT} OR 5000`)
})