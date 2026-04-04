import { controller } from "../controller/controller.js";
import { cardHandler } from "./card.js";
import { format } from "date-fns";

// Handles the rendering of the application
class DomController {

    renderApp(){
        this.renderProjects();
        this.renderTodos();
    }

    renderProjects() {
        const projectContainer = document.querySelector('#projectContainer');

        // Clears the projectContainer before rebuilding it
        projectContainer.textContent = '';

        controller.getData().forEach(project => {
            const projectCard = cardHandler.projectCard(project.title, project.id, project.todos);
            projectContainer.appendChild(projectCard);
        });
    }

    renderTodos() {
        const project = controller.getData().find(project => project.id == controller.activeProjectID);
        const todoContainer = document.querySelector('#todoContainer');

        // Clears the todoContainer before rebuilding it
        todoContainer.textContent = '';

        if (project) {
            project.todos.forEach(todo => {
                const todoCard = cardHandler.todoCard(todo.title, todo.description, format(todo.date, 'dd MMM yyyy'), todo.priority, todo.status, todo.id);
                todoContainer.appendChild(todoCard);
            });
        }
    }
}

export const dom = new DomController;
