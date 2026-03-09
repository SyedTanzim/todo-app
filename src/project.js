import { TodoGenerator } from "./todo.js";

export class ProjectGenerator {
    constructor(title, id = crypto.randomUUID(), todos = []) {
        this.id = id;
        this.title = title;
        this.todos = todos;
    }

    getTodo() {
        return this.todos;
    }

    addTodo(value) {
        this.todos.push(value);
    }

    removeTodo(removeId) {
        const index = this.todos.findIndex(todo => todo.id === removeId);
        if (index > -1) {
            this.todos.splice(index, 1);
        };
    }

    todoReconstructor() {
        const reconstructedTodo = this.todos.map(todo =>
            new TodoGenerator(todo.title, todo.description, todo.date, todo.priority, todo.id)
        );
        this.todos = [];
        reconstructedTodo.forEach(todo => this.addTodo(todo));
    }
};