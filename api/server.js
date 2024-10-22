import express, { json } from 'express';
import cors from 'cors';
const https = require('https');
const fs = require('fs');

const app = express();
const port = 5000;

const sslOptions = {
    key: fs.readFileSync('ruta/a/server.key'),
    cert: fs.readFileSync('ruta/a/server.cert')
  };

app.use(cors());
app.use(json());

app.get('/', (req, res) => {
    res.send('¡Servidor HTTPS activo!');
  });

// Configurar el servidor HTTPS
https.createServer(sslOptions, app).listen(3443, () => {
    console.log('Servidor HTTPS escuchando en el puerto 3443');
  });