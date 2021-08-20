const assert = require('assert');

exports.insertDocument = (db,document,collection,callback) =>{
 const collect = db.collection(collection);
 return collect.insert(document);
}

exports.findDocument = (db,collection,callback) =>{
 const collect = db.collection(collection);
 return collect.find({}).toArray();
}

exports.delDocument = (db,document,collection,callback) =>{
 const collect = db.collection(collection);
 return collect.deleteOne(document);
}

exports.updateDocument = (db,document,update,collection,callback) =>{
    const collect = db.collection(collection);
    return collect.updateOne(document,{$set:update},null);
  
}