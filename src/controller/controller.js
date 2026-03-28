import { ProjectGenerator } from "../model/project.js";
import { TodoGenerator } from "../model/todo.js";
import { dataManager } from "../model/data.js";
import { dom } from "../views/dom.js";

/**
 * Handles all Project & Todo operations
 * Acts as a bridge between UI and Data
 */
export class ControllerClass {

    constructor() {
        // Loads saved projects when the app starts
        this.dataArray = dataManager.savedDataReconstructor();
        this.activeProjectID = null;
        this.editMode = false;
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
        this.activeProjectID = project.id;
        dom.renderApp();
    }

    // Deletes a project
    removeProject(removeId) {
        this.dataArray = this.dataArray.filter(p => p.id !== removeId);
        dataManager.saveData(this.dataArray);
        dom.renderApp();
    }

    editProject(projectTitle) {
        const project = this.dataArray.find(project => project.id === this.activeProjectID);
        project.title = projectTitle
        dataManager.saveData(this.dataArray);
        dom.renderApp();
    }

    // Creates a todo and adds it to the project
    addTodoToProject(projectId, title, description, date, priority) {
        const project = this.dataArray.find(p => p.id === projectId);

        if (project) {
            const todo = new TodoGenerator(title, description, date, priority);
            project.addTodo(todo);
            dataManager.saveData(this.dataArray);
            dom.renderApp();
        };
    }

    // Deletes a todo
    removeTodoFromProject(removeId) {
        const project = this.dataArray.find(p => p.id === this.activeProjectID);

        if (project) {
            project.removeTodo(removeId);
            dataManager.saveData(this.dataArray);
            dom.renderApp();
        }
    }
}

export const controller = new ControllerClass;