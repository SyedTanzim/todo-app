import { controller } from "../controller/controller.js";
import { cardHandler } from "./card.js";

class DomController {

    renderApp() {
        const mainContainer = document.querySelector('#mainContainer');
        const projectContainer = document.querySelector('#projectContainer');
        projectContainer.textContent = ''

        controller.getData().forEach(project => {
            const projectCard = cardHandler.projectCard(project.title, project.id, project.todos);
            projectContainer.appendChild(projectCard);
        });

        const projectID = controller.activeProjectID ? controller.activeProjectID : 'default';
        const project = controller.getData().find(project => project.id == projectID);
        const todoContainer = document.querySelector('#todoContainer');
        todoContainer.textContent = ''

        project.todos.forEach(todo => {
            const todoCard = cardHandler.todoCard(todo.title, todo.description, todo.date, todo.priority);
            todoContainer.appendChild(todoCard);
        });

        mainContainer.appendChild(projectContainer);
    }
}

export const dom = new DomController;
