const { Client } = require('pg');
const express = require('express');
const path = require('path');


const PG_URL = process.env.PG_URL || 'postgres://localhost:5432/';
const DB_NAME = process.env.DB_NAME || 'user';

const db = new Client(`${PG_URL}${DB_NAME}`);

db.connect();

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/users', (req,res) => {
    res.send();
})

app.get('/departments', (req,res) => {
    res.send();
})

app.listen(PORT, ()=>console.log('server running'));