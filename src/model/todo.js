export class TodoGenerator {
    constructor(title, description, date, priority, status = false, id = crypto.randomUUID()) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.status = status;
    }

    // Set priority of todos
    setPriority(value) {
        this.priority = value;
    }

    toggleStatus() {
        this.status = !this.status;
    }
};