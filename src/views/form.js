import { controller } from "../controller/controller.js";

// Handles all form-related functions
class FormHandler {

    // If a project ID is passed, the form opens in edit mode
    showProjectForm(projectId) {
        const todoModal = document.querySelector('#todoModal');
        const projectModal = document.querySelector('#projectModal');
        const projectForm = document.querySelector('#projectForm');

        if (projectId) {
            const project = controller.getData().find(project => project.id === projectId);
            const projectTitle = document.querySelector('#projectTitle');
            projectTitle.value = project.title;
        } else {
            projectForm.reset();
        }

        todoModal.close(); // Close the todo form
        projectModal.show();
    }

    hideProjectForm() {
        const projectForm = document.querySelector('#projectForm');
        const projectModal = document.querySelector('#projectModal');
        controller.projectEditMode = false;
        projectForm.reset();
        projectModal.close();
    }

    // Adds or edits a project and saves it to localStorage when the user clicks the submit button
    submitProjectForm() {
        const projectModal = document.querySelector('#projectModal');
        const projectForm = document.querySelector('#projectForm');

        const title = document.querySelector('#projectTitle').value;

        if (controller.projectEditMode == true) {
            controller.editProject(title);
            projectModal.close();
            projectForm.reset();
            controller.projectEditMode = false;
        } else {
            controller.generateProject(title);
            projectModal.close();
            projectForm.reset();
        }
    }

    // If a todo ID is passed, the form opens in edit mode
    showTodoForm(todoId) {
        const todoForm = document.querySelector('#todoForm');
        const projectModal = document.querySelector('#projectModal');
        const todoModal = document.querySelector('#todoModal');

        if (todoId) {
            const project = controller.getData().find(project => project.id === controller.activeProjectID);
            const todo = project.todos.find(todo => todo.id === todoId);

            const todoTitle = document.querySelector('#todoTitle');
            todoTitle.value = todo.title;

            const todoDescription = document.querySelector('#todoDescription');
            todoDescription.value = todo.description;

            const todoDate = document.querySelector('#todoDate');
            todoDate.value = todo.date;

            const todoPriority = document.querySelector('#todoPriority');
            todoPriority.value = todo.priority;
        } else {
            todoForm.reset();
        }
        projectModal.close(); //Close the project form
        todoModal.show();
    }

    hideTodoForm() {
        const todoForm = document.querySelector('#todoForm');
        const todoModal = document.querySelector('#todoModal');
        todoForm.reset();
        todoModal.close();
        controller.todoEditMode = false;
    }

    // Adds or edits a todo for the active project when the user clicks the submit button
    submitTodoForm() {
        const todoForm = document.querySelector('#todoForm');
        const todoModal = document.querySelector('#todoModal');

        const title = document.querySelector('#todoTitle').value;
        const description = document.querySelector('#todoDescription').value;
        const date = document.querySelector('#todoDate').value;
        const priority = document.querySelector('#todoPriority').value;

        // If no active project is selected, the project ID defaults to 'default'
        controller.activeProjectID = controller.activeProjectID != null ? controller.activeProjectID : 'default';

        if (controller.todoEditMode == true) {
            controller.editTodo(title, description, date, priority);
            todoModal.close();
            todoForm.reset();
            controller.todoEditMode = false;
        } else {
            controller.addTodoToProject(title, description, date, priority);
            todoModal.close();
            todoForm.reset();
        }

    }
}

export const formHandler = new FormHandler;