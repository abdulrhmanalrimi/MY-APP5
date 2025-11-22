import { useState, useEffect } from 'react';

const NOTES_KEY = 'nahw_notes';

export interface Note {
  id: string;
  lessonId: string;
  content: string;
  timestamp: number;
}

export const useNotes = (lessonId?: string) => {
  const [notes, setNotes] = useState<Note[]>(() => {
    const stored = localStorage.getItem(NOTES_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  }, [notes]);

  const addNote = (lessonId: string, content: string) => {
    const newNote: Note = {
      id: `note_${Date.now()}`,
      lessonId,
      content,
      timestamp: Date.now(),
    };
    setNotes([...notes, newNote]);
  };

  const updateNote = (noteId: string, content: string) => {
    setNotes(notes.map(note => 
      note.id === noteId ? { ...note, content, timestamp: Date.now() } : note
    ));
  };

  const deleteNote = (noteId: string) => {
    setNotes(notes.filter(note => note.id !== noteId));
  };

  const getLessonNotes = (lessonId: string) => {
    return notes.filter(note => note.lessonId === lessonId);
  };

  return {
    notes: lessonId ? getLessonNotes(lessonId) : notes,
    addNote,
    updateNote,
    deleteNote,
    getLessonNotes,
  };
};
