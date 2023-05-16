const axios = require('axios');
const fs = require('fs');
const express = require("express");
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", __dirname + '/views');
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render("home.ejs")
    console.log("user hit hpg!")

})

app.post('/compile',(req,res)=>{
    const code = req.body.code;
    console.log(code);
    try {
        fs.writeFileSync('file.scala', code);
        console.log("File has been saved.");
    } catch (error) {
        console.log(error);
    }
    res.redirect('/eg');

})

app.get('/eg',(req,res)=>{
    res.render('eg.ejs');
})


// app.post('/compile',(req,res)=>{

// })

app.listen(3000);