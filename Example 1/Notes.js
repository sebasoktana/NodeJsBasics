module.exports = {
    list: () => {
        let notes = localStorage.getItem('Notes');
        return JSON.parse(notes);
    },
    insert: (note) => {
        let notes = JSON.parse(localStorage.getItem('Notes'));
        if (notes === null) {
            notes = []
        }
        notes.push(note);
        localStorage.setItem('Notes', JSON.stringify(notes));
    },
    clear: () => {
        localStorage.setItem('Notes', []);
    },
    delete: (note) => {
        let notes = JSON.parse(localStorage.getItem('Notes'));
        const index = notes.indexOf(note);
        if (index > -1) {
            notes.splice(index, 1);
        }
        localStorage.setItem('Notes', JSON.stringify(notes));
    }
}

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}