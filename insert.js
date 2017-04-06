var mongo = require('mongodb').MongoClient
var argv = process.argv
var targetedAge = argv[2]

mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err, db) {
  if (err) return console.error(err)
  var collection = db.collection('users')

  users.collection.insert({
    firstName: 'Robin',
    lastName: 'Chua'
  }).toArray(function (err, documents) {
    if (err) return console.error(err)
    console.log(documents)
  })
  db.close()
})
