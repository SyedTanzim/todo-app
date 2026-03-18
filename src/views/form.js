import { controller } from "../controller/controller.js";

class FormHandler {

    showProjectForm() {
        const todoModal = document.querySelector('#todoModal');
        const projectModal = document.querySelector('#projectModal');
        const addProjectBtn = document.querySelector('#addProjectBtn');

        addProjectBtn.addEventListener('click', () => {
            todoModal.close();
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

    submitProjectForm() {
        const projectModal = document.querySelector('#projectModal');
        const submitProjectBtn = document.querySelector('#submitProjectBtn');
        const projectForm = document.querySelector('#projectForm');

        submitProjectBtn.addEventListener('click', (e) => {
            e.preventDefault();
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
            projectModal.close();
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
}

export const formHandler = new FormHandler;
