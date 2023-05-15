const axios = require('axios');
const express = require("express");
const app = express();
const compiler=require('compilex');
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

app.post('/',(req,res)=>{
    const axios = require('axios');
    let code=res.body.code;
    const options = {
  method: 'POST',
  url: 'https://online-code-compiler.p.rapidapi.com/v1/',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '95992756cbmshdd903a59b07377ap1b3e73jsn36c4b8682a30',
    'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
  },
  data: {
    language: 'java',
    version: 'latest',
    code: code,
    input: null
  }
};

try {
	const response = axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
res.render('eg.ejs',{code:response.data})
})


app.listen(3000);