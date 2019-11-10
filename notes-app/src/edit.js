import { initializeEditPage, generateLastEdited } from './views';
import { removeNote, updateNote } from './notes';

const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const dateElement = document.querySelector('#last-edited');
const removeElement = document.querySelector('#remove-note');
const noteId = location.hash.substring(1);

initializeEditPage(noteId);

titleElement.addEventListener('input', e => {
    const note = updateNote(noteId, {
        title: e.target.value,
    })
    dateElement.textContent = generateLastEdited(note.updatedAt);
});

bodyElement.addEventListener('input', e => {
    const note = updateNote(noteId, {
        body: e.target.value,
    })
    dateElement.textContent = generateLastEdited(note.updatedAt);
});

removeElement.addEventListener('click', _ => {
    removeNote(noteId);
    location.assign('/index.html');
});

window.addEventListener('storage', e => {
    if (e.key === 'notes') {
        initializeEditPage(noteId);
    }
});