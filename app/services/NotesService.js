import { AppState } from "../AppState.js";
import { Notes } from "../models/Notes.js";
import { loadState, saveState } from "../utils/Store.js";

class NotesService {

    // saveActiveNotes() {
    //     const noteJots = AppState.activeNotes
    //     noteJots.createdDate = new Date()
    //     AppState.emit('activeNotes')
    //     this.saveNotes()
    // }
    // selectActiveNotes(notesId) {
    //     console.log('service', notesId)
    //     const selectedNote = AppState.noteJots.find(jot => notesId == jot.id)
    //     console.log(selectedNote);
    //     AppState.activeNotes = selectedNote
    // }
    createNote(formData) {
        console.log('service', formData)
        AppState.noteJots.push(new Notes(formData))
        console.log(AppState.noteJots);
        // this.saveNotes()
    }


    // saveNotes() {
    //     saveState('noteJots', AppState.noteJots)
    // }

    // loadNotes() {
    //     AppState.noteJots = loadState('noteJots', [Notes])
    // }

}
export const notesService = new NotesService()