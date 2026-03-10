import Note from "../models/Note.js";

const getAllNotes = async (_, res) => {//if i'm not using the req object i can replace it with _ to avoid eslint warning
  try {
    const notes = await Note.find().sort({ createdAt: -1 });// sort by createdAt in descending order to show the most recent notes first
    res.status(200).json(notes);
  } catch (error) {
    console.error('Error retrieving notes getAllNotes method:', error);
    res.status(500).json({ message: 'Error retrieving notes', error });
  }
};

const  createNote = async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }
  try {
    const newNote = new Note({
      title,
      content,
    });
    const savedNote = await newNote.save();
    res.status(201).json({ message: 'Note created successfully!', note: savedNote });
  } catch (error) {
    console.error('Error creating note createNote method:', error);
    res.status(500).json({ message: 'Error creating note', error });
  }
};

const  updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }
  try {
    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
    if (!updatedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json({ message: 'Note updated successfully!', note: updatedNote });
  } catch (error) {
    console.error('Error updating note updateNote method:', error);
    res.status(500).json({ message: 'Error updating note', error });
  }
};

const  deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json({ message: 'Note deleted successfully!' });
  } catch (error) {
    console.error('Error deleting note deleteNote method:', error);
    res.status(500).json({ message: 'Error deleting note', error });
  }
};

const getNoteById = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json(note);
  } catch (error) {
    console.error('Error retrieving note getNoteById method:', error);
    res.status(500).json({ message: 'Error retrieving note', error });
  }
};
export { getAllNotes, createNote, updateNote, deleteNote, getNoteById }; 