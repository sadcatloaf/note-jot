import { AppState } from "../AppState.js";
import { notesService } from "../services/NotesService.js";

export class NotesController {
    constructor() {
        console.log('this is note');

        this.drawNotesList()
        // this.drawActiveNotes()
        AppState.on('noteJots', () => console.log('Notes changed'))
        AppState.on('activeNotes', this.drawActiveNotes)
        AppState.on('noteJots', this.drawNotesList)
        notesService.loadNotes()
    }

    drawNotesList() {
        console.log('🧠')
        const notesElm = document.getElementById('Notes-List')
        notesElm.innerHTML = ''
        AppState.noteJots.forEach(Jots => notesElm.innerHTML += Jots.NotesList)

        const noteCountElm = document.getElementById('Notes-Count')
        noteCountElm.innerHTML = AppState.noteJots.length.toString()
    }

    drawActiveNotes() {
        console.log('📔📔')
        const activeNotesElm = document.getElementById('Active-Notes')
        activeNotesElm.innerHTML = AppState.activeNotes.ActiveNotes

    }


    createNotes() {
        console.log('creating notes')
        event.preventDefault()
        const formElm = event.target
        // @ts-ignore
        if (formElm.Title.value.length < 3) {
            console.log('Too short')
            return
        }

        const formData = {
            // @ts-ignore
            title: formElm.Title.value,
            // @ts-ignore
            color: formElm.color.value,


        }
        console.log(formData);
        notesService.createNote(formData)
    }

    selectNote(notesId) {
        console.log('📒📒', notesId)
        notesService.selectActiveNotes(notesId)
    }

    saveActiveNotes() {
        event.preventDefault()
        console.log('💾📔');
        const formElm = event.target
        // @ts-ignore
        let newText = formElm.description.value
        console.log(newText);
        notesService.saveActiveNotes()
    }

    deleteNoteListing(notesId) {
        console.log('delete', notesId);
        const confirmed = confirm("Are you sure you want to delete this?")
        if (!confirmed) return
        const areYouSure = confirm("Are you Sure?")
        if (!areYouSure) return
        notesService.deleteNoteListing(notesId)
        this.drawNotesList()
    }
}

