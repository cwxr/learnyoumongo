var mongo = require('mongodb').MongoClient
var argv = process.argv
var targetedAge = argv[2]

mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err, db) {
  if (err) return console.error(err)
  var parrots = db.collection('parrots')

  parrots.find({
    name: 1,
    age: 1, {$gt: +targetedAge},
    _id: 0
  }).toArray(function (err, documents) {
    if (err) return console.error(err)
    console.log(documents)
  })
  db.close()
})
