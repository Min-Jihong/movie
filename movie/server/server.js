//server.js
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const server = require('http').createServer(app);

app.use(cors()); // cors 미들웨어를 삽입합니다.
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 
app.post('/search/movie', function (req, res) {
    var apiKey = '97e69180e91b511c8ecf31bcf00b9f49';
    var options = {
        url: 'http://api.themoviedb.org/3/?api_key='+ apiKey + 
            '&language=' + 'ko-KR' + 
            '&page=' + encodeURI(req.body.page),
            // "&region=" + encodeURI(req.body.region),
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "text/plain",
        }
    };

    require('request').get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
            res.end(body);
        } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
            console.log('error = ' + response.statusMessage);
        }
    });
});

app.listen(8080, ()=>{
    console.log('server is running on 8080');
});