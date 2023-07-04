const axios = require('axios');

async function api (req,res){
    console.log(req.body);
    const {code} = req.body;
    const options = {
        method: 'POST',
        url: 'https://online-code-compiler.p.rapidapi.com/v1/',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '95992756cbmshdd903a59b07377ap1b3e73jsn36c4b8682a30',
          'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
        },
        data: {
          language: 'python3',
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

