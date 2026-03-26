import { controller } from "../controller/controller.js";
import { cardHandler } from "./card.js";

// Handles the rendering of the application
class DomController {

    renderApp() {
        const mainContainer = document.querySelector('#mainContainer');
        const projectContainer = document.querySelector('#projectContainer');

        // Clears the projectContainer before rebuilding it
        projectContainer.textContent = '';

        controller.getData().forEach(project => {
            const projectCard = cardHandler.projectCard(project.title, project.id, project.todos);
            projectContainer.appendChild(projectCard);
        });

        // If no active project is selected, the project ID defaults to 'default'
        const projectID = controller.activeProjectID ? controller.activeProjectID : 'default';

        const project = controller.getData().find(project => project.id == projectID);
        const todoContainer = document.querySelector('#todoContainer');
        
        // Clears the todoContainer before rebuilding it
        todoContainer.textContent = '';

        if (project) {
            project.todos.forEach(todo => {
                const todoCard = cardHandler.todoCard(todo.title, todo.description, todo.date, todo.priority, todo.id);
                todoContainer.appendChild(todoCard);
            });
        }

        mainContainer.appendChild(projectContainer);
    }
}

export const dom = new DomController;
