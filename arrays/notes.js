const notes = [{ 
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise moar'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

console.log(notes);
console.log('');

const sortNotes = function (notes) {
    notes.sort(function(a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase() ) {
            return -1;
        }
        else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1;
        } 
        else {
            return 0;
        }
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().
            includes(query);
        const isBodyMatch = note.body.toLowerCase().toLowerCase().
            includes(query);
        
        return isTitleMatch || isBodyMatch;
    })
}

sortNotes(notes);
console.log(notes);

/*

console.log(findNotes(notes, 'work'))

*/

// notes.push('Note 4')

// console.log(notes.length);
// console.log(notes)

// notes.pop();

// console.log(notes.length);
// console.log(notes)

// notes.shift();

// console.log(notes.length);
// console.log(notes)

// notes.unshift('The first note');

// console.log(notes.length);
// console.log(notes)

// notes.splice(1, 1, 'this is the new second item');

// console.log(notes.length);
// console.log(notes)

// const findNote = function (notes, noteTitle) {
//     return notes.find(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     });
// }

// const note = findNote(notes, 'office modification') 
// console.log(note)

// const index = notes.findIndex(function (note, index) {
//     console.log(note)
//     return note.title === 'Habits to work on'
// });

// console.log(index);

// for (let count = 0; count <= 2; count++) {
//     console.log(count)
// }

// for (let count = 0; count < notes.length; count++){
//     console.log(notes[count])
// }

