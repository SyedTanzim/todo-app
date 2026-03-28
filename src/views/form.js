import { controller } from "../controller/controller.js";

// Handles all form-related functions
class FormHandler {

    showProjectForm(projectId) {
        if (projectId) {
            const project = controller.getData().find(project => project.id === projectId);
            const projectTitle = document.querySelector('#projectTitle');
            projectTitle.value = project.title;
        }

        const todoModal = document.querySelector('#todoModal');
        const projectModal = document.querySelector('#projectModal');
        todoModal.close(); // Close the todo form
        projectModal.show();
    }

    hideProjectForm() {
        const projectForm = document.querySelector('#projectForm');
        const projectModal = document.querySelector('#projectModal');
        controller.editMode = false;
        projectForm.reset();
        projectModal.close();
    }

    // Adds the project to localStorage when the user clicks the submit button
    submitProjectForm() {
        const projectModal = document.querySelector('#projectModal');
        const projectForm = document.querySelector('#projectForm');

        const title = document.querySelector('#projectTitle').value;

        if (controller.editMode == true) {
            controller.editProject(title);
            projectModal.close();
            projectForm.reset();
            controller.editMode = false;
        } else {
            controller.generateProject(title);
            projectModal.close();
            projectForm.reset();
        }
    }

    showTodoForm() {
        const projectModal = document.querySelector('#projectModal');
        const todoModal = document.querySelector('#todoModal');
        projectModal.close(); //Close the project form
        todoModal.show();
    }

    hideTodoForm() {
        const todoForm = document.querySelector('#todoForm');
        const todoModal = document.querySelector('#todoModal');
        todoForm.reset();
        todoModal.close();
    }

    // Adds the todo to the active project when the user clicks the submit button
    submitTodoForm() {
        const todoForm = document.querySelector('#todoForm');
        const todoModal = document.querySelector('#todoModal');

        const title = document.querySelector('#todoTitle').value;
        const description = document.querySelector('#todoDescription').value;
        const date = document.querySelector('#todoDate').value;
        const priority = document.querySelector('#todoPriority').value;

        // If no active project is selected, the project ID defaults to 'default'
        const projectID = controller.activeProjectID ? controller.activeProjectID : 'default';

        controller.addTodoToProject(projectID, title, description, date, priority);
        todoModal.close();
        todoForm.reset();
    }
}

export const formHandler = new FormHandler;