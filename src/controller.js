import { ProjectGenerator } from "./project.js";
import { TodoGenerator } from "./todo.js";
import { dataManager } from "../data.js";

export class ControllerClass {

    constructor() {
        this.dataArray = dataManager.savedDataChecker();
    }

    getData() {
        return this.dataArray;
    }

    generateProject(title) {
        const project = new ProjectGenerator(title);
        this.dataArray.push(project);
        dataManager.saveData(this.dataArray);
    }

    removeProject(removeId) {
        const index = this.dataArray.findIndex(project => project.id === removeId); 
        if (index > -1) { 
            this.dataArray.splice(index, 1); 
        };
    }

    addTodoToProject(projectId, title, description, date, priority) {
        const project = this.dataArray.find(p => p.id === projectId);
        if (project) {
            const todo = new TodoGenerator(title, description, date, priority);
            project.addTodo(todo);
        }
    }
};