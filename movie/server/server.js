//server.js
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const server = require('http').createServer(app);

app.use(cors()); // cors 미들웨어를 삽입합니다.

app.get('/search/movie', function (req, res) {
    var api_url = 'https://openapi.naver.com/v1/search/movie?display=' + encodeURI(req.query.display) + '&query=' + encodeURI(req.query.query) + '&start' + encodeURI(req.query.start); // json 결과
    var request = require('request');
    var options = {
        url: api_url,
        headers: {
            'X-Naver-Client-Id':'x8E_yvHbIATSCaWJtp0P', 
            'X-Naver-Client-Secret': 'YUc6_Iaayp'
        }
    };
    request.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
            res.end(body);
        } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
        }
    });
});

app.listen(8080, ()=>{
    console.log('server is running on 8080');
});