const express = require('express');
const fs = require('fs-extra');
const inquirer = require('inquirer');

const PORT = 3001;

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});

module.exports = Server;