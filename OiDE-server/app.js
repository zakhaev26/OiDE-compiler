const express = require('express');
const app = express();
const API = require('./routes/handleapi.js');
const cors = require('cors');

app.use(cors());
app.use('/api',API)

app.listen('5000',()=>{
    console.log('Server live @127.0.0.1:5000')
})