const express = require('express');
const fs = require('fs-extra');
const inquirer = require('inquirer');
const http = require('http');
var app = express();

app.set('port', (process.env.PORT || 3001));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

const PORT = 3001;

const handleRequest = (request, response) => {
    response.end(`It Works!! Path Hit: ${request.url}`);
};

const server = http.createServer(handleRequest);

// server.listen(process.env.PORT || 3001)
server.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});

module.exports = server;