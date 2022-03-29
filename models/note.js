const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then((result) => {
    console.log("conntected to db");
  })
  .catch((err) => {
    console.error(`error connecting to db: ${err}`);
  });

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Note", noteSchema);
