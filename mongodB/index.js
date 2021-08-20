const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = "mongodb://localhost:27017/";
const dbName = 'conFusion';
const mongoOperations = require('./mondbop');







MongoClient.connect(url).then((client)=>{
  const db = client.db(dbName);
  mongoOperations.insertDocument(db,{name:"Vada",description:"Really Good"},"dishes").then((result)=>{
   console.log(result);
   return mongoOperations.findDocument(db,'dishes');
  }).then((docs)=>{
   console.log(docs);
   return mongoOperations.updateDocument(db,{name:"Vada"},{description:"Better"},"dishes");
  }).then((result)=>{
   console.log(result);
   return mongoOperations.findDocument(db,'dishes');
  }).then((docs)=>{
     console.log("Found documents are",docs);
     return db.dropCollection("dishes");
  }).then((result)=>{
     console.log("Deleted everything " , result);
  }).then((result)=>{
     console.log("Deleted the collection",result);
     client.close();
  }).catch((err)=>console.log(err))
}).catch((err)=>console.log(err))


/* MongoClient.connect(url,(err,client)=>{
   assert.equal(err,null);
   console.log("Connection establised succesfull");

     const db = client.db('dbname');
     mongoOperations.insertDocument(db,{name:"Vadonut",description:"Good"},'dishes').then((result)=>{
        console.log(result.ops);
        mongoOperations.findDocument(db,"dishes",(docs)=>{
           console.log(docs);
           mongoOperations.updateDocument(db,{name:"Vadonut"},{description:"Its better"},'dishes',(result)=>{
             console.log(result);
             mongoOperations.findDocument(db,"dishes",(docs)=>{
                 console.log("Found Updated documents",docs);
                 db.dropCollection("dishes",(result)=>{
                     console.log("Dropped Collection");
                     client.close();
                 })
             })

           })
        })

     })
  /*    const collections = db.collection('dishes');
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



}) */