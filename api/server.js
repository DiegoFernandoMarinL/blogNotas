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
        res.status(200).json(val);
    }catch{
        console.error('Error al obtener las notas', error);
        res.status(500).send('Error en el servidor'); 
    }
  });

app.get('/notes/:id', async (req, res) => {
  const id = req.params.id; 
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

//Busca notas por título o contenido.
app.get('/notes/search/:query', async (req, res) => {
  const text = req.params;
  console.log(text);
  try {
      const db = await connectMongo();
      const collection = db.collection('note');
      const val = await collection.find({
        $or: [
            { title: { $regex: text.query, $options: "i" } },
            { content: { $regex: text.query, $options: "i" } }
        ],
        status: "activa"
      },{projection: {title:1, content:1}});
      console.log(val);
      if (val) {
        res.status(200).json(val); 
      } else {
        res.status(204).send('Nota no encontrada'); 
      }
  } catch (error) {
      console.error('Error al consultar la base de datos:', error);
      res.status(500).json({ valido: false, mensaje: 'Error en el servidor' });
  }
});
// Configurar el servidor HTTPS
https.createServer(sslOptions, app).listen(3443, () => {
    console.log('Servidor HTTPS escuchando en el puerto 3443');
  });