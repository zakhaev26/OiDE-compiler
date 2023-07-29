// const fs = require('fs')
// const  { exec } = require( "child_process");
// const {promisify} = require("util")
// const executeCommand = promisify(exec);

const axios = require('axios');
async function api (req,res){
    const {code,language} = req.body;
    //for testing in api server
    console.log(code,language);
    const options = {
        method: 'POST',
        url: process.env.API_URL,
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': process.env.X_RAPID_API_KEY,
          'X-RapidAPI-Host':process.env.X_RAPID_API_HOST, 
        },
        data: {
          language: language,
          version: 'latest',
          code: code,
          input: null
        }}
    
        try {
          const response = await axios.request(options);
            res.status(200).send(JSON.stringify(response.data))
        } catch (error) {
            res.status(404).send(JSON.stringify(`Error While Processing request`))
            console.error(error);
        }
}

module.exports = api;

