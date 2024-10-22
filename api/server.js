const express = require('express');
const cors = require('cors');
const https = require('https');
const fs = require('fs');
const { connectMongo } = require('./db/connect');

const app = express();

const sslOptions = {
    key: fs.readFileSync('../server.key'),
    cert: fs.readFileSync('../server.cert')
  };

app.use(cors());
app.use(json());

app.get('/', async (req, res) => {
    try{
        const db = await connectMongo();
        const collection = db.collection('note');
        const val = await collection.find({}).toArray();
        console.log(val);
        
        res.status(200).json(val);
        res.send('¡Servidor HTTPS activo!');
    }catch{
        console.error('Error al obtener las notas', error);
        res.status(500).send('Error en el servidor'); 
    }
  });

// Configurar el servidor HTTPS
https.createServer(sslOptions, app).listen(3443, () => {
    console.log('Servidor HTTPS escuchando en el puerto 3443');
  });