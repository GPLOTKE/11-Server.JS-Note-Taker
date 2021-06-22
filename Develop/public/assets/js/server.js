const express = require('express');

const PORT = 83001;

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});