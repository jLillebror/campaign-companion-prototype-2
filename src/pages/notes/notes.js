import React, { useState, useEffect } from 'react';
import Navigation from "@/app/Components/Navigation/Navigation";
import './notes.css';

const NotesPage = () => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [notes, setNotes] = useState([]);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  const handleTitleChange = (e) => {
    setNoteTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setNoteContent(e.target.value);
  };

  const handleSaveNote = () => {
    if (!noteTitle.trim() || !noteContent.trim()) {
      setValidationError('Please enter both title and content.');
      return;
    }

    const note = {
      title: noteTitle,
      content: noteContent
    };

    if (selectedNoteIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[selectedNoteIndex] = note;
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      setNotes(updatedNotes);
      setSelectedNoteIndex(null);
    } else {
      const updatedNotes = [...notes, note];
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      setNotes(updatedNotes);
    }

    setNoteTitle('');
    setNoteContent('');
    setValidationError('');
  };

  const handleEditNote = (index) => {
    setSelectedNoteIndex(index);
    setNoteTitle(notes[index].title);
    setNoteContent(notes[index].content);
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setNotes(updatedNotes);

    if (selectedNoteIndex === index) {
      setSelectedNoteIndex(null);
      setNoteTitle('');
      setNoteContent('');
    }
  };

  return (
    <div className="notes-container">
      <Navigation />
      <h1>Notes Page</h1>
      <div>
        <label htmlFor="noteTitle">Title:</label>
        <input type="text" id="noteTitle" value={noteTitle} onChange={handleTitleChange} />
      </div>
      <div>
        <label htmlFor="noteContent">Content:</label>
        <textarea id="noteContent" value={noteContent} onChange={handleContentChange} rows={10} />
      </div>
      {validationError && <p className="error-message">{validationError}</p>}
      <button onClick={handleSaveNote}>{selectedNoteIndex !== null ? 'Update' : 'Save'}</button>
      <div>
        <h2>Saved Notes</h2>
        {notes.map((note, index) => (
          <div key={index} className="note">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={() => handleEditNote(index)}>Edit</button>
            <button onClick={() => handleDeleteNote(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesPage;
