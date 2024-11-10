import { AppState } from "../AppState.js";
import { notesService } from "../services/NotesService.js";

export class NotesController {
    constructor() {
        console.log('this is note');

        this.drawNotesList()
        AppState.on('noteJots', () => console.log('Notes changed'))
        // AppState.on('activeNotes', this.drawActiveNotes)
        // AppState.on('noteJots', this.drawActiveNotes)
        // notesService.loadNotes()
    }

    drawNotesList() {
        console.log('🧠')
        const notesElm = document.getElementById('Notes-List')
        notesElm.innerHTML = ''
        AppState.noteJots.forEach(Jots => notesElm.innerHTML += Jots.NotesList)

        const noteCountElm = document.getElementById('Notes-Count')
        noteCountElm.innerHTML = AppState.noteJots.length.toString()
    }

    // drawActiveNotes() {
    //     console.log('📔📔')
    //     const activeNotesElm = document.getElementById('Active-Notes')
    //     activeNotesElm.innerHTML = AppState.activeNotes.ActiveNotes

    // }


    createNotes() {
        console.log('creating notes')
        event.preventDefault()
        const formElm = event.target
        // const formData = {
        //     // @ts-ignore
        //     title: formElm.title.value,
        //     // @ts-ignore
        //     createdDate: formElm.createdDate.value
        // }
        // console.log(formElm);
        // notesService.createNote(formElm)
    }

    // selectActiveNotes(notesId) {
    //     console.log('📒📒', notesId)
    //     notesService.selectActiveNotes(notesId)
    // }

    // saveActiveNotes() {
    //     event.preventDefault()
    //     console.log('💾📔', AppState.activeNotes);
    //     const formElm = event.target
    //     // @ts-ignore
    //     let newText = formElm.description.value
    //     console.log(newText);
    //     notesService.saveActiveNotes()
    // }

}