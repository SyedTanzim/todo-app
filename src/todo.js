export class TodoGenerator {
    constructor(title, description, date, priority, id = crypto.randomUUID()) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
    }

    // Set priority of todos
    setPriority(value) {
        this.priority = value;
    }
};