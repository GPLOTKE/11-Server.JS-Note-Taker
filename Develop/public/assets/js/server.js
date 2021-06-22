const express = require('express');
const fs = require('fs-extra');
const inquirer = require('inquirer');
const http = require('http');

const PORT = 3001;

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});

module.exports = server;