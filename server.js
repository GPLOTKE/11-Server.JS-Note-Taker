const express = require('express');
const fs = require('fs-extra');
// const inquirer = require('inquirer');
// const http = require('http');
const app = express();
// const dbJSON = require('./db/db.json');
const PORT = process.env.PORT || 3001;
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './Public/index.html')))
app.get('/Public/notes', (req, res) => res.sendFile(path.join(__dirname, './Public/notes.html')))



app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});