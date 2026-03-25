import { controller } from "../controller/controller.js";

// Handles all form-related functions
class FormHandler {

    showProjectForm() {
        const todoModal = document.querySelector('#todoModal');
        const projectModal = document.querySelector('#projectModal');
        const addProjectBtn = document.querySelector('#addProjectBtn');

        addProjectBtn.addEventListener('click', () => {
            todoModal.close(); // Close the todo form
            projectModal.show();
        });
    }

    hideProjectForm() {
        const projectModal = document.querySelector('#projectModal');
        const closeProjectModalBtn = document.querySelector('#closeProjectModalBtn');

        closeProjectModalBtn.addEventListener('click', () => {
            projectModal.close();
        });
    }

    // Adds the project to localStorage when the user clicks the submit button
    submitProjectForm() {
        const projectModal = document.querySelector('#projectModal');
        const submitProjectBtn = document.querySelector('#submitProjectBtn');
        const projectForm = document.querySelector('#projectForm');

        submitProjectBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevents the browser from reloading or sending a traditional HTTP request
            const title = document.querySelector('#projectTitle').value;
            controller.generateProject(title);
            projectModal.close();
            projectForm.reset();
        });
    }


    showTodoForm() {
        const projectModal = document.querySelector('#projectModal');
        const todoModal = document.querySelector('#todoModal');
        const addTodoBtn = document.querySelector('#addTodoBtn');

        addTodoBtn.addEventListener('click', () => {
            projectModal.close(); //Close the project form
            todoModal.show();
        });
    }


    hideTodoForm() {
        const todoModal = document.querySelector('#todoModal');
        const closeTodoModalBtn = document.querySelector('#closeTodoModalBtn');

        closeTodoModalBtn.addEventListener('click', () => {
            todoModal.close();
        });
    }

    // Adds the todo to the active project when the user clicks the submit button
    submitTodoForm() {
        const todoForm = document.querySelector('#todoForm');
        const todoModal = document.querySelector('#todoModal');
        const submitTodoBtn = document.querySelector('#submitTodoBtn');

        submitTodoBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevents the browser from reloading or sending a traditional HTTP request

            const title = document.querySelector('#todoTitle').value;
            const description = document.querySelector('#todoDescription').value;
            const date = document.querySelector('#todoDate').value;
            const priority = document.querySelector('#todoPriority').value;

            // If no active project is selected, the project ID defaults to 'default'
            const projectID = controller.activeProjectID ? controller.activeProjectID : 'default';

            controller.addTodoToProject(projectID, title, description, date, priority);
            todoModal.close();
            todoForm.reset();
        });
    }
}

export const formHandler = new FormHandler;
