import { controller } from "../controller/controller.js";
import { cardHandler } from "./card.js";
import { format } from "date-fns";

// Handles the rendering of the application
class DomController {

    renderApp() {
        this.renderProjects();
        this.renderTodos();
    }

    renderProjects() {
        // If no active project is selected, the active project ID defaults to 'default'
        controller.activeProjectID = controller.activeProjectID != null ? controller.activeProjectID : 'default';

        const projectContainer = document.querySelector('#projectContainer');

        // Clears the projectContainer before rebuilding it
        projectContainer.textContent = '';

        controller.getData().forEach(project => {
            const projectCard = cardHandler.projectCard(project.title, project.id, project.todos);
            projectCard.classList = project.id == controller.activeProjectID ? 'project activeProject' : 'project';
            projectContainer.appendChild(projectCard);
        });
    }

    renderTodos() {
        const project = controller.getData().find(project => project.id == controller.activeProjectID);
        const todoContainer = document.querySelector('#todoContainer');

        // Clears the todoContainer before rebuilding it
        todoContainer.textContent = '';

        if (project) {
            if (project.todos.length < 1) {
                const todoNotFound = document.createElement('p');
                todoNotFound.textContent = 'No Todos Yet! Add One.';
                todoNotFound.id = 'todoNotFound';
                todoContainer.appendChild(todoNotFound);
            }
            project.todos.forEach(todo => {
                const todoCard = cardHandler.todoCard(todo.title, todo.description, format(todo.date, 'dd MMM yyyy'), todo.priority, todo.status, todo.id);
                todoContainer.appendChild(todoCard);
            });
        } else {
            const projectNotFound = document.createElement('p');
            projectNotFound.textContent = 'Select Or Add A Project.';
            projectNotFound.id = 'projectNotFound';
            todoContainer.appendChild(projectNotFound);
        }
    }
}

export const dom = new DomController;
