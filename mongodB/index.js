const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = "mongodb://localhost:27017/";
const dbName = 'conFusion';


MongoClient.connect(url,(err,client)=>{
   assert.equal(err,null);
   console.log("Connection establised succesfull");

     const db = client.db('dbname');
     const collections = db.collection('dishes');
     collections.insertOne({"name":"Chicken","description":"Good"},(err,result)=>{
     assert.equal(err,null);
     console.log(result.ops);
     collections.find({}).toArray((err,docs)=>{
     assert.equal(err,null);
     console.log(docs);

     db.dropCollection("dishes",(err,result)=>{
       assert.equal(err,null);
       console.log("Deleted Succesfull");
       client.close();

     })
 })

 })



})