var PouchDB = require('pouchdb');

var pouchdbDebug = require('pouchdb-debug');
PouchDB.plugin(pouchdbDebug);
var db = new PouchDB('http://localhost:5984/kittens');

db.info();

db.info().then(function (info) {
    console.log(info);
  });

  PouchDB.debug.enable('*');

  

var doc = {
    "_id": "mittens",
    "name": "Mittens",
    "occupation": "kitten",
    "age": 3,
    "hobbies": [
      "playing with balls of yarn",
      "chasing laser pointers",
      "lookin' hella cute"
    ]
  };

  db.put(doc);
  



db.get('mittens').then(function (doc) {
    console.log(doc);
  });


  db.get('mittens').then(function (doc) {
    // update their age
    doc.age = 4;
    // put them back
    return db.put(doc);
  }).then(function () {
    // fetch mittens again
    return db.get('mittens');
  }).then(function (doc) {
    console.log(doc);
  });