const express = require('express');
const cors = require('cors');
const https = require('https');
const fs = require('fs');
const path = require('path');
const { connectMongo } = require('./db/connect');

const app = express();

const sslOptions = {
    key: fs.readFileSync(path.join(__dirname, '../server.key')),
    cert: fs.readFileSync(path.join(__dirname, '../server.cert'))
  };

app.use(cors());
app.use(express.json());

app.get('/notes', async (req, res) => {
    try{
        const db = await connectMongo();
        const collection = db.collection('note');
        const val = await collection.find({status: "activa"}).toArray();
        console.log(val);
        res.status(200).json(val);
    }catch{
        console.error('Error al obtener las notas', error);
        res.status(500).send('Error en el servidor'); 
    }
  });

// Configurar el servidor HTTPS
https.createServer(sslOptions, app).listen(3443, () => {
    console.log('Servidor HTTPS escuchando en el puerto 3443');
  });