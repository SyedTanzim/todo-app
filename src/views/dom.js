import { controller } from "../controller/controller.js";
import { cardHandler } from "./card.js";
import { formHandler } from "./form.js";

class DomController {

    renderApp() {
        const mainContainer = document.querySelector('#mainContainer');
        const projectContainer = document.querySelector('#projectContainer');
        projectContainer.textContent = ''

        controller.getData().forEach(project => {
            const projectCard = cardHandler.projectCard(project.title, project.id, project.todos);
            projectContainer.appendChild(projectCard);
        });
        mainContainer.appendChild(projectContainer);
    }
}

export const dom = new DomController;
formHandler.showProjectForm();
formHandler.hideProjectForm();
formHandler.submitProjectForm();
formHandler.showTodoForm();
formHandler.hideTodoForm();
formHandler.submitTodoForm();
dom.renderApp();