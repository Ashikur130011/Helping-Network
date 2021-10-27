const { MongoClient } = require('mongodb');
const express = require('express');
const cors = require('cors')
require('dotenv').config()

//middleware
app.use(cors());

const app = express();
const port = process.env.PORT || 5000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tv45h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

console.log(uri);

async function run(){
    try{
        await client.connect();
        console.log('Database connected')
    }
    finally{
        //await client.close();
    }
}
run().catch(console.dir);
app.get('/', (req, res) => {
    res.send('We are from helping network')
})

app.listen(port, () => {
    console.log('App is running on server', port);
})
