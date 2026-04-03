import { format } from "date-fns";
import { controller } from "../controller/controller.js";
import { formHandler } from "./form.js";

// Handles all card-generation functions
class CardHandler {

    projectCard(title, id, todos) {

        const projectCard = document.createElement('div');
        projectCard.className = 'project'
        projectCard.dataset.id = id;

        const projectTitle = document.createElement('h1');
        projectTitle.className = 'projectTitle'
        projectTitle.textContent = title;

        // Renders the todos of the active project when it is clicked
        projectTitle.addEventListener('click', () => {
            const todoContainer = document.querySelector('#todoContainer');
            todoContainer.textContent = '';
            controller.activeProjectID = id;
            todos.forEach(todo => {
                const todoCard = this.todoCard(todo.title, todo.description, format(todo.date, 'dd MMM yyyy'), todo.priority, todo.status, todo.id);
                todoContainer.appendChild(todoCard);
            });
        });

        const projectEditBtn = document.createElement('button');
        projectEditBtn.className = 'projectEditBtn'
        projectEditBtn.innerHTML = '<img width="20" height="20" src="https://img.icons8.com/windows/32/edit--v1.png" alt="edit--v1"/>';

        projectEditBtn.addEventListener('click', () => {
            controller.activeProjectID = id;
            controller.projectEditMode = true;
            formHandler.showProjectForm(id);
        });

        const projectDeleteBtn = document.createElement('button');
        projectDeleteBtn.className = 'projectDeleteBtn'
        projectDeleteBtn.innerHTML = '<img width="20" height="20" src="https://img.icons8.com/windows/32/trash.png" alt="trash"/>';

        // Deletes the project from localStorage
        projectDeleteBtn.addEventListener('click', () => {
            controller.removeProject(id);
        });

        projectCard.appendChild(projectTitle);
        projectCard.appendChild(projectEditBtn);
        projectCard.appendChild(projectDeleteBtn);

        return projectCard;
    }

    todoCard(title, description, date, priority, status, id) {
        const todo = document.createElement('div');
        todo.className = 'todo';
        todo.dataset.id = id; // Stores the todo ID
        todo.dataset.status = status; // Stores the todo status

        const todoTitle = document.createElement('h3');
        todoTitle.className = 'todoTitle';
        todoTitle.textContent = title;

        const todoDescription = document.createElement('p');
        todoDescription.className = 'todoDescription';
        todoDescription.textContent = description;

        const todoDate = document.createElement('p');
        todoDate.className = 'todoDate';
        todoDate.textContent = `DUE: ${date}`;

        const todoPriority = document.createElement('p');
        todoPriority.className = 'todoPriority';
        todoPriority.textContent = `PRIORITY: ${priority}`;

        const todoStatusBtn = document.createElement('button');
        todoStatusBtn.className = 'todoStatusBtn ';

        // Updates button text to reflect the todo's completion state
        todoStatusBtn.textContent = status == true ? 'STATUS: COMPLETED' : 'STATUS: PENDING';

        // Sets the active todo ID and toggles the todo status
        todoStatusBtn.addEventListener('click', () => {
            controller.activeTodoID = id;
            controller.toggleTodoStatus();
        });

        const todoEditBtn = document.createElement('button');
        todoEditBtn.className = 'todoEditBtn'
        todoEditBtn.innerHTML = '<img width="25" height="25" src="https://img.icons8.com/windows/32/edit--v1.png" alt="edit--v1"/>';

        // Sets the active todo ID and displays the todo form
        todoEditBtn.addEventListener('click', () => {
            controller.activeTodoID = id;
            controller.todoEditMode = true;
            formHandler.showTodoForm(id);
        });

        const todoDeleteBtn = document.createElement('button');
        todoDeleteBtn.className = 'todoDeleteBtn'
        todoDeleteBtn.innerHTML = '<img width="25" height="25" src="https://img.icons8.com/windows/32/trash.png" alt="trash"/>';

        // Deletes the todo from localStorage
        todoDeleteBtn.addEventListener('click', () => {
            controller.removeTodoFromProject(id);
        });

        todo.appendChild(todoTitle);
        todo.appendChild(todoDescription);
        todo.appendChild(todoPriority);
        todo.appendChild(todoDate);
        todo.appendChild(todoStatusBtn);
        todo.appendChild(todoEditBtn);
        todo.appendChild(todoDeleteBtn);

        return todo;
    }

    buttonsGenerator() {
        const navBtnContainer = document.querySelector('#navBtnContainer');
        const projectForm = document.querySelector('#projectForm');
        const todoForm = document.querySelector('#todoForm');

        const addProjectBtn = document.createElement('button');
        addProjectBtn.id = 'addProjectBtn';
        addProjectBtn.innerHTML = '<img width="25" height="25" src="https://img.icons8.com/external-inkubators-basic-outline-inkubators/32/external-add-folder-file-and-folder-inkubators-basic-outline-inkubators.png" alt="external-add-folder-file-and-folder-inkubators-basic-outline-inkubators"/> <div>Add Project<div/>';

        addProjectBtn.addEventListener('click', () => {
            controller.projectEditMode = false;
            formHandler.showProjectForm();
        });

        const closeProjectModalBtn = document.createElement('button');
        closeProjectModalBtn.id = 'closeProjectModalBtn';
        closeProjectModalBtn.textContent = 'Close';

        closeProjectModalBtn.addEventListener('click', () => {
            formHandler.hideProjectForm();
        });

        const submitProjectBtn = document.createElement('button');
        submitProjectBtn.id = 'submitProjectBtn';
        submitProjectBtn.textContent = 'Submit';

        submitProjectBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevents the browser from reloading or sending a traditional HTTP request
            formHandler.submitProjectForm();
        });

        const addTodoBtn = document.createElement('button');
        addTodoBtn.id = 'addTodoBtn';
        addTodoBtn.innerHTML = '<img width="25" height="25" src="https://img.icons8.com/windows/32/add-property.png" alt="add-property"/> <div> Add Todo </div>';

        addTodoBtn.addEventListener('click', () => {
            controller.todoEditMode = false;
            formHandler.showTodoForm();
        });

        const closeTodoModalBtn = document.createElement('button');
        closeTodoModalBtn.id = 'closeTodoModalBtn';
        closeTodoModalBtn.textContent = 'Close';

        closeTodoModalBtn.addEventListener('click', () => {
            formHandler.hideTodoForm();
        });

        const submitTodoBtn = document.createElement('button');
        submitTodoBtn.id = 'submitTodoBtn';
        submitTodoBtn.textContent = 'Submit';

        submitTodoBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevents the browser from reloading or sending a traditional HTTP request
            formHandler.submitTodoForm();
        });

        navBtnContainer.appendChild(addProjectBtn);
        navBtnContainer.appendChild(addTodoBtn);
        projectForm.appendChild(submitProjectBtn);
        projectForm.appendChild(closeProjectModalBtn);
        todoForm.appendChild(submitTodoBtn);
        todoForm.appendChild(closeTodoModalBtn);
    }
}

export const cardHandler = new CardHandler;