const { MongoClient } = require('mongodb');

exports.connectMongo = async()=> {
    try{
        //const url = `${process.env.MONGO_PROTOCOLO}${process.env.MONGO_USER}:${process.env.MONGO_PSW}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`
        const url = 'mongodb://mongo:TVrGoUhUyjtlXVjVDSMliWWvlOxVZaMU@autorack.proxy.rlwy.net:38519'
        //const url = 'mongodb://localhost:27017/'
        const client = new MongoClient(url);
        await client.connect();
        const db = client.db("blogNotes");
        return db;
    }catch{
        console.error('Error connecting to MongoDB');
        throw new Error('Error connecting to MongoDB');
    }
}