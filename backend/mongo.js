const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb://romain_db_user:${password}@ac-hvf43c4-shard-00-00.jn4bbfi.mongodb.net:27017,ac-hvf43c4-shard-00-01.jn4bbfi.mongodb.net:27017,ac-hvf43c4-shard-00-02.jn4bbfi.mongodb.net:27017/noteApp?ssl=true&replicaSet=atlas-coylat-shard-0&authSource=admin&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url, { family: 4 })

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

/*const note = new Note({
  content: 'Node.js is not easy',
  important: false,
})

note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})*/

Note.find({}).then(result =>{
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})