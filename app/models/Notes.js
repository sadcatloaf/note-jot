export class Notes {

    constructor(data) {

        this.id = data.id || generateId()
        this.name = data.name
        this.description = data.description
        this.updatedAt = data.updatedAt == undefined ? new Date() : new data(data.updatedAt)
        this.createdDate = data.createdDate == undefined ? new Date() : new Date(data.createdDate)
    }




}






function generateId() {
    throw new Error("Function not implemented.")
}

