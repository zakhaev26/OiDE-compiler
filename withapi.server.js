const axios = require('axios');
const fs = require('fs');
const express = require("express");
const app = express();
let lang;
let code = "Start Coding here!";
let output = "Your output..";
require('dotenv').config()
const  { exit } = require( "process");
const  readline = require( "readline");
const  { exec } = require( "child_process");
const {promisify} = require("util")
const executeCommand = promisify(exec);


let langarr = ['c', 'cpp', 'dart', 'csharp', 'py', 'rust', 'scala', 'golang', 'whitespace', 'verilog', 'vbn', 'yabasic', 'unlambda', 'tcl', 'swift', 'spidermonkey', 'smalltalk', 'scheme', 'ruby', 'rhino', 'racket', 'r', 'prolog', 'pike', 'picolisp', 'php', 'perl', 'pascal', 'octave', 'ocaml', 'objc', 'nodejs', 'nim', 'nemerle', 'nasm', 'mozart', 'lua', 'lolcode', 'kotlin', 'jlang', 'jbang', 'java', 'intercal', 'icon', 'haxe', 'haskell', 'hack', 'groovy', 'gccasm', 'fsharp', 'freebasic', 'fortran', 'forth', 'fasm', 'fantom', 'falcon', 'factor', 'erlang', 'elixir', 'd', 'coffeescript', 'cobol', 'clojure', 'clisp', 'c99', 'brainfuck', 'blockly', 'befunge', 'bc', 'bash', 'awk', 'algol', 'ada'];

const bodyParser = require('body-parser');
const { Console } = require('console');
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", __dirname + '/views');
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

let f1 = "The Compiler API is an exceptional tool that brings innovation and convenience to the world of software development. With support for over 75+ programming languages, it enables developers to unleash their creativity and build groundbreaking applications with ease."
let f2 = "Imagine being able to compile and run code snippets in various languages seamlessly. From popular programming languages like Python, Java, and C++ to more specialized ones like Rust, Go, and TypeScript, the Compiler API has got you covered. You can experiment, test, and iterate rapidly, all within a single unified interface."

app.get('/', (req, res) => {
    res.render("home.ejs", { f1: f1, f2: f2, langarr: langarr });
    console.log("user hit hpg!")
})

app.post('/compile', async (req, res) => {
    console.log(req.body.lang)
    lang = req.body.lang
    res.redirect('/code-editor');

})

app.get('/code-editor', (req, res) => {
    res.render('code-editor.ejs', { code: code, output: output, lang: lang });
    console.log("code = " + code);
})

app.post('/code-editor', async (req, res) => {
    code = req.body.code;

    //writing the code in a temp file
    await fs.writeFile(`RUNTHISCODEVIABASH.${lang}`,code,err=>console.log(err))

    // to execute script and assigning to output
    output = (await executeCommand(`sh compile${lang}.sh`)).stdout;
    console.log(output.stdout)
    console.log("code = " + code);
    // executeCommand(`sh cleaner.sh`);
    res.redirect('/code-editor');
})

app.listen(3000||process.env.PORT, () => {
    console.log(`${3000} or ${process.env.PORT}`)
});

