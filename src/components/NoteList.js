import { useEffect, useState } from 'react';
import db from '../db/data.json';
import Note from './Note';

export default function NoteList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/notes')
      .then(res => res.json())
      .then(data => setNotes(data));
  }, []);

  console.log(notes);

  return (
    <ul className="list">
      {notes.map(note => (
        <Note note={note} key={note.id} />
      ))}
    </ul>
  );
}
