import { ProjectGenerator } from "./project.js";
import { TodoGenerator } from "./todo.js";
import { dataManager } from "./data.js";

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
        this.dataArray = this.dataArray.filter(p => p.id !== removeId);
        dataManager.saveData(this.dataArray);
    }

    addTodoToProject(projectId, title, description, date, priority) {
        this.dataArray = dataManager.savedProjectReconstructor();

        const project = this.dataArray.find(p => p.id === projectId);

        if (project) {           
            const todo = new TodoGenerator(title, description, date, priority);
            project.addTodo(todo);
            dataManager.saveData(this.dataArray);
        };
    }
}