import uuidv4 from 'uuid/v4';
import moment from 'moment';

let notes = [];

const loadNotes = () => {
    const notesJson = localStorage.getItem('notes');

    try {
        return !notesJson ? [] : JSON.parse(notesJson);
    } catch (e) {
        return [];
    }    
}

const saveNotes = () => { 
    localStorage.setItem('notes', JSON.stringify(notes));
};

// Expose notes from module
const getNotes = () => notes;

const createNote = () => {
    const id = uuidv4();
    const timestamp = moment().valueOf();
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp,
    });

    saveNotes();

    return id;
}

const removeNote = (id) => {
    const noteIndex = notes.findIndex(note => {
        return note.id === id;
    })

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1);
        saveNotes();
    }
}

const sortNotes = (sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1;
            } else if (a.updatedAt < b.updatedAt) {
                return 1;
            } else {
                return 0;
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a,b) => {
            if (a.createdAt > b.createdAt) {
                return -1;
            } else if (a.createdAt < b.createdAt) {
                return 1;
            } else {
                return 0;
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort((a,b) => {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
            if (titleA < titleB) {
                return -1;
            } else if (titleA > titleB) {
                return 1;
            } else {
                return 0;
            }
        })
    } else {
        return notes;
    }
};

const updateNote = (id, updates) => {
    const note = notes.find((note) => note.id === id);

    if (!notes) {
        return;
    }

    if (typeof updates.title === 'string') {
        note.title = updates.title;
        note.updatedAt = moment().valueOf();
    }

    if (typeof updates.body === 'string') {
        note.body = updates.body;
        note.updatedAt = moment().valueOf();
    }

    saveNotes();

    return note;
};

notes = loadNotes();

export { getNotes, createNote, removeNote, sortNotes, updateNote };