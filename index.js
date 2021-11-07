const express = require('express')
const app = express()
const port = 3000
var request = require('request');
app.use(express.json());
app.get('/', (req, res) => {
    res.send('API TEST TORRE')
})
app.get('get_user/:customer', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    var url = 'https://bio.torre.co/api/bios/'+req.params.customer;
    request(url, function (error, response) {
        res.send(response.body)
    });
    console.log(res)    
})
app.get('*', function(req, res){
    console.log(res)
    res.header("Access-Control-Allow-Origin", "*");
    res.status(404).send('what???');
  });
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})