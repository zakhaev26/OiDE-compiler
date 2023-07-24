const express = require('express');
const app = express();
const API = require('./routes/handleapi.js');
const cors = require('cors');
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(cors());
app.use('/api',API)

app.listen('5000',()=>{
    console.log('Server live @127.0.0.1:5000')
})