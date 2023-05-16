const axios = require('axios');
const fs = require('fs');
const express = require("express");
const app = express();
let lang;
let code="Start Coding here!";
let output="Your output..";

let langarr=[ 'c', 'cpp', 'dart', 'csharp', 'python', 'rust', 'scala', 'golang','whitespace','verilog','vbn','yabasic','unlambda','tcl','swift','spidermonkey','smalltalk','scheme','ruby','rhino','racket','r','prolog','pike','picolisp','php','perl','pascal','octave','ocaml','objc','nodejs','nim','nemerle','nasm','mozart','lua','lolcode','kotlin','jlang','jbang','java','intercal','icon','haxe','haskell','hack','groovy','gccasm','fsharp','freebasic','fortran','forth','fasm','fantom','falcon','factor','erlang','elixir','d','coffeescript','cobol','clojure','clisp','c99','brainfuck','blockly','befunge','bc','bash','awk','algol','ada'];

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", __dirname + '/views');
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

let f1="The Compiler API is an exceptional tool that brings innovation and convenience to the world of software development. With support for over 75+ programming languages, it enables developers to unleash their creativity and build groundbreaking applications with ease."
let f2="Imagine being able to compile and run code snippets in various languages seamlessly. From popular programming languages like Python, Java, and C++ to more specialized ones like Rust, Go, and TypeScript, the Compiler API has got you covered. You can experiment, test, and iterate rapidly, all within a single unified interface."

app.get('/', (req, res) => {
    res.render("home.ejs",{f1:f1,f2:f2,langarr:langarr});
    console.log("user hit hpg!")
})

app.post('/compile', async (req, res) => {
    // const code = req.body.code;
    // console.log(req.body);
    let { c, cpp, dart, csharp, python, rust, scala, golang,whitespace,verilog,vbn,yabasic,unlambda,tcl,swift,spidermonkey,smalltalk,scheme,ruby,rhino,racket,r,prolog,pike,picolisp,php,perl,pascal,octave,ocaml,objc,nodejs,nim,nemerle,nasm,mozart,lua,lolcode,kotlin,jlang,jbang,java,intercal,icon,haxe,haskell,hack,groovy,gccasm,fsharp,freebasic,fortran,forth,fasm,fantom,falcon,factor,erlang,elixir,d,coffeescript,cobol,clojure,clisp,c99,brainfuck,blockly,befunge,bc,bash,awk,algol,ada} = req.body;
    if (c === '') lang = 'c';
    if (cpp === '') lang = 'cpp';
    if (dart === '') lang = 'dart';
    if (golang === '') lang = 'go';
    if (csharp === '') lang = 'csharp';
    if (python === '') lang = 'python3';
    if (rust === '') lang = 'rust';
    if (scala === '') lang = 'scala';
    if (whitespace=== '') lang = 'whitespace';
    if (verilog === '') lang = 'verilog';
    if (vbn === '') lang = 'vbn';
    if (yabasic === '') lang = 'yabasic';
    if (unlambda === '') lang = 'unlambda';
    if (tcl === '') lang = 'tcl';
    if (swift === '') lang = 'swift';
    if (spidermonkey === '') lang = 'spidermonkey';
    if (smalltalk === '') lang = 'smalltalk';
    if (scheme === '') lang = 'scheme';
    if (ruby === '') lang = 'ruby';
    if (rhino === '') lang = 'rhino';
    if (racket === '') lang = 'racket';
    if (r === '') lang = 'r';
    if (prolog === '') lang = 'prolog';
    if (pike === '') lang = 'pike';
    if (picolisp === '') lang = 'picolisp';
    if (php=== '') lang = 'php';
    if (perl === '') lang = 'perl';
    if (pascal === '') lang = 'pascal';
    if (octave === '') lang = 'octave';
    if (ocaml === '') lang = 'ocaml';
    if (objc === '') lang = 'objc';
    if (nodejs === '') lang = 'nodejs';
    if (nim === '') lang = 'nim';
    if (nemerle === '') lang = 'nemerle';
    if (nasm === '') lang = 'nasm';
    if (mozart === '') lang = 'mozart';
    if (lua === '') lang = 'lua';
    if (lolcode === '') lang = 'lolcode';
    if (kotlin === '') lang = 'kotlin';
    if (jlang === '') lang = 'jlang';
    if (jbang === '') lang = 'jbang';
    if (java === '') lang = 'java';
    if (intercal === '') lang = 'intercal';
    if (icon === '') lang = 'icon';
    if (haxe === '') lang = 'haxe';
    if (haskell === '') lang = 'haskell';
    if (hack === '') lang = 'hack';
    if (groovy === '') lang = 'groovy';
    if (gccasm === '') lang = 'gccasm';
    if (fsharp === '') lang = 'fsharp';
    if (freebasic === '') lang = 'freebasic';
    if (fortran === '') lang = 'fortran';
    if (forth === '') lang = 'forth';
    if (fasm === '') lang = 'fasm';
    if (fantom === '') lang = 'fantom';
    if (falcon === '') lang = 'falcon';
    if (factor === '') lang = 'factor';
    if (erlang === '') lang = 'erlang';
    if (elixir === '') lang = 'elixir';
    if (d === '') lang = 'd';
    if (coffeescript === '') lang = 'coffeescript';
    if (cobol === '') lang = 'cobol';
    if (clojure === '') lang = 'clojure';
    if (clisp === '') lang = 'clisp';
    if (c99 === '') lang = 'c99';
    if (brainfuck === '') lang = 'brainfuck';
    if (blockly === '') lang = 'blockly';
    if (befunge === '') lang = 'befunge';
    if (bc === '') lang = 'bc';
    if (bash === '') lang = 'bash';
    if (awk === '') lang = 'awk';
    if (algol === '') lang = 'algol';
    if (ada=== '') lang = 'ada';

    console.log(lang);
    console.log(req.body.code);
    res.redirect('/code-editor');

})

app.get('/code-editor', (req, res) => {
    res.render('code-editor.ejs', {code:code, output: output,lang:lang});
    console.log("code = " + code);
})

app.post('/code-editor', async(req, res) => {
    code = req.body.code;
    const options = {
        method: 'POST',
        url: 'https://online-code-compiler.p.rapidapi.com/v1/',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '95992756cbmshdd903a59b07377ap1b3e73jsn36c4b8682a30',
            'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
        },
        data: {
            language: lang,
            version: 'latest',
            code: code,
            input: null
        }
    };
    try {
        const response = await axios.request(options);
        console.log(response.data);
        output=response.data.output;
    } catch (error) {
        console.error(error);
    }
    console.log("code = " + code);
    res.redirect('/code-editor');
})

// app.post('/compile',(req,res)=>{

// })

app.listen(3000);