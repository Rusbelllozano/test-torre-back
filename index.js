require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
var request = require('request');
app.use(express.json());
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});
app.get('/', (req, res) => {
    res.send('API TEST TORRE')
})
app.get('/get_user/:customer', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    if (req.params.customer) {
        var url = process.env.URL_API_TORRE + req.params.customer;
        request(url, function (error, response) {
            res.send(response.body)
        });
    } else {
        res.send({
            status: 404,
            message: 'Type a username'
        }
    );
    }
})
app.post('/get_people_same_skill', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    var url = process.env.URL_API_TORRE_SEARCH_PEOPLE;
    request.post({
        headers: {'content-type' : 'application/json'},
        url: url,
        json:req.body
      }, function(error, response, body){
        res.send(response.body)
      });
  });
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})