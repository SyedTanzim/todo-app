import { ProjectGenerator } from "./project.js";
import { TodoGenerator } from "./todo.js";
import { dataManager } from "./data.js";


/**
 * Handles all Project & Todo operations
 * Acts as a bridge between UI and Data
 */
export class ControllerClass {

    constructor() {
        // Loads saved projects when the app starts
        this.dataArray = dataManager.savedDataChecker();
    }

    // Return all projects
    getData() {
        return this.dataArray;
    }

    // Creates a new project and saves it
    generateProject(title) {
        const project = new ProjectGenerator(title);
        this.dataArray.push(project);
        dataManager.saveData(this.dataArray);
    }

    // Deletes a project
    removeProject(removeId) {
        this.dataArray = this.dataArray.filter(p => p.id !== removeId);
        dataManager.saveData(this.dataArray);
    }

    // Creates a todo and adds it to the project
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