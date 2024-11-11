import { AppState } from "../AppState.js";
import { Notes } from "../models/Notes.js";
import { loadState, saveState } from "../utils/Store.js";

class NotesService {


    saveActiveNotes() {
        const noteJots = AppState.activeNotes
        noteJots.createdDate = new Date()
        AppState.emit('activeNotes')
        this.saveNote()
    }
    selectActiveNotes(notesId) {
        console.log('service', notesId)
        const selectedNote = AppState.noteJots.find(jot => notesId == jot.id)
        console.log(selectedNote);
        AppState.activeNotes = selectedNote
    }
    createNote(formData) {
        console.log('service', formData)
        AppState.noteJots.push(new Notes(formData))
        console.log(AppState.noteJots);
        this.saveNote()
    }


    saveNote() {
        saveState('noteJots', AppState.noteJots)
    }

    loadNotes() {
        console.log(loadState('noteJots', [Notes]))
        AppState.noteJots = loadState('noteJots', [Notes])
    }


    deleteNoteListing(notesId) {
        console.log(notesId);
        const NotesDelete = AppState.noteJots.find(note => note.id == notesId)
        console.log(NotesDelete);
        const indexToRemove = AppState.noteJots.indexOf(NotesDelete)
        AppState.noteJots.splice(indexToRemove, 1)
        this.saveNote()
    }

}
export const notesService = new NotesService()