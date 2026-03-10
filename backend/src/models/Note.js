import mongoose from "mongoose";

// 1 - Define the Note schema
// 1 - The schema defines the structure of the Note documents in MongoDB
// 2 - Model based on the schema provides an interface to interact with the database

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
},{timestamps: true});

// 2 - Create the Note model based on the schema
const Note = mongoose.model("Note", noteSchema);

export default Note;