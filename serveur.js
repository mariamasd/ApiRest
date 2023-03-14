const mongoose = require('mongoose')
const express = require('express')
const app= express();
const user=require('./Modéles/User');
const port = process.env.PORT || 3000;
const { MongoClient } = require('mongodb');
app.get('/',(req,res) => {
    res.send("helloword");
})

// connexion avec la base de données Atlass
const uri = 'mongodb+srv://user-test:sadou@atlascluster.da7fotg.mongodb.net/test';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('User-test');
    const collection = database.collection('contactList');

    // Insérer un document dans la collection
    const result = await collection.insertMany([{ Email: 'John@gmail.com', passWord:"jn123" },{
Email:"fatou@gmail.com",passWord:"ft234"
    },{Email:"abdou@gmail.com",passWord:"hamide"},{Email:"gomycode@gmail.com",passWord:"welcome"}]);
    console.log(`Document inséré avec l'_id: ${result}`);
const findData=await collection.find({Email:"John2@gmail.com"});
console.log(findData);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

(async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1/User-test")
        console.log("connection avec la base de données reussit")
    } catch (error) {
       console.log(error.message) 
    }
})();
//creation de routes pour envoyer des donnes sur le server
const users={
    Email:"maimouna@gmail.com",
    passWord:"mn1232"
};
app.get('/',(req,res) =>{
user.find().then(users=>{
    res.send(users)
    console.log("reusit",users)
});
})
app.listen(port,()=>{
    console.log("server en marche !!!");
})