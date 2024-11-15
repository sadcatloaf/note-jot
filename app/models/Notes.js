import { generateId } from "../utils/GenerateId.js"

export class Notes {

  constructor(data) {

    this.id = data.id || generateId()
    this.title = data.title
    this.description = data.description || ''
    this.updatedAt = data.updatedAt == undefined ? new Date() : new Date(data.updatedAt)
    this.createdDate = data.createdDate == undefined ? new Date() : new Date(data.createdDate)
    this.color = data.color
  }


  get NotesList() {
    return `
        <div style="background-color:${this.color};">
          <section class="row note-Decoration text-light m-3 rounded">
            <div role="button" onclick="app.NotesController.selectNote('${this.id}') "
            class="selectable mb-3 d-flex">
              <span class="fw-bold m-2">${this.title}</span><span class="m-2">${this.ShortReportedDate}</span>
            </div>
            <span class="m-2">${this.description}</span>
          </section>
          </div>
        `
  }



  get ActiveNotes() {
    return `
    <div class="m-3">`}

  get ActiveNotesTemplate() {
    return `
   <div class=" bg-dark rounded shadow text-light ">
            <div class="m-3">
              <h2>${this.title}</h2>
              <p>Created on: ${this.ShortReportedDate}</p>
              <p>Last Updated: ${this.FormattedUpdatedAt}</p>
            </div>
            <hr>
            <form style="background-color:${this.color};" onsubmit="app.NotesController.saveActiveNotes('${this.id}')">
              <textarea name="description" class="form-control decoration" rows="25">${this.description}</textarea>
              <button class="btn btn-success m-2">Save</button>
              <button onclick="app.NotesController.deleteNoteListing('${this.id}')" class="btn btn-danger" title="Delete"><i
                  class="mdi mdi-delete-empty"></i></button>
            </form>
          </div>
   `
  }








  get LongUpdatedAt() {
    return this.updatedAt.toLocaleDateString('en-us', { weekday: 'long', year: 'numeric', day: 'numeric', dayPeriod: 'long', month: 'long', era: 'long' })
  }

  get FormattedUpdatedAt() {
    return this.updatedAt.toLocaleDateString('en-us', { hour: '2-digit', minute: '2-digit', year: '2-digit', day: '2-digit', month: '2-digit' })
  }

  get LongReportedDate() {
    return this.createdDate.toLocaleDateString('en-us', { hour: '2-digit', minute: '2-digit', weekday: 'long', year: 'numeric', day: 'numeric', dayPeriod: 'long', month: 'long', era: 'long' })
  }

  get ShortReportedDate() {
    return this.createdDate.toLocaleDateString('en-us', { year: '2-digit', day: '2-digit', month: '2-digit' })
  }




}












