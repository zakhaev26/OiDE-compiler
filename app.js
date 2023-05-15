const axios = require('axios');
const express = require("express");
const app = express();
const compiler=require('compilex');

var options ={stats:true};
compiler.init();
    

const prt = 5000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", __dirname + '/views');
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render("home.ejs")
    console.log("user hit hpg!")
})

app.post('/', async (req, res) => {
    console.log(req.body.userCode);
    userCode = req.body.userCode;

    // const options = {
    //     method: 'POST',
    //     url: 'https://online-code-compiler.p.rapidapi.com/v1/',
    //     headers: {
    //         'content-type': 'application/json',
    //         'X-RapidAPI-Key': '95992756cbmshdd903a59b07377ap1b3e73jsn36c4b8682a30',
    //         'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
    //     },
    //     data: {
    //         language: 'c++',
    //         version: 'latest',
    //         code: userCode,
    //         input: null
    //     }
    // };
    // try {
    //     const response = await axios.request(options);
    //     console.log(response.data.output);
    // } catch (error) {
    //     console.error(error);
    // }
//if windows  
var envData = { OS : "windows" , cmd : "g++"}; // (uses g++ command to compile )
//else
var envData = { OS : "linux" , cmd : "gcc" }; // ( uses gcc command to compile )
compiler.compileCPP(envData , userCode ,(data)=>{
    res.send(data);
});
console.log(data.output);
console.lop(data.error);

    res.redirect('/eg');
})

//API logic



app.get('/eg', (req, res) => {
    res.render('eg.ejs');
});



app.listen(prt || process.env.PORT, (req, res) => {
    console.log(`App is live @ ${prt}`);
})