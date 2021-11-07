require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
var request = require('request');
app.use(express.json());
app.get('/', (req, res) => {
    res.send('API TEST TORRE')
})
app.get('/get_user/:customer', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    if(req.params.customer) {
        var url = 'https://bio.torre.co/api/bios/'+req.params.customer;
        request(url, function (error, response) {
            res.send(response.body)
        }); 
    } else {
        res.status(404).send('Type a username');
    }
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})