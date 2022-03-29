const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI)

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean
})

const Note = mongoose.model("Note", noteSchema)

const note = new Note({
  content: "Is Svelte better?",
  date: new Date(),
  important: true,
})

// note.save().then(result => {
//   console.log("note saved!")
//   mongoose.connection.close()
// })

Note.find().then(result => {
  result.forEach(note => {
    console.log(note);
  })
  mongoose.connection.close()
})