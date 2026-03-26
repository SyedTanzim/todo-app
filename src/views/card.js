import { controller } from "../controller/controller.js";

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
                const todoCard = this.todoCard(todo.title, todo.description, todo.date, todo.priority, todo.id);
                todoContainer.appendChild(todoCard);
            });
        });

        const projectEditBtn = document.createElement('button');
        projectEditBtn.className = 'projectEditBtn'
        projectEditBtn.textContent = 'Edit';

        const projectDeleteBtn = document.createElement('button');
        projectDeleteBtn.className = 'projectDeleteBtn'
        projectDeleteBtn.textContent = 'Delete';

        // Deletes the project from localStorage
        projectDeleteBtn.addEventListener('click', () => {
            controller.removeProject(projectCard.dataset.id);
        });

        projectCard.appendChild(projectTitle);
        projectCard.appendChild(projectEditBtn);
        projectCard.appendChild(projectDeleteBtn);

        return projectCard;
    }

    todoCard(title, description, date, priority, id) {
        const todo = document.createElement('div');
        todo.className = 'todo';
        todo.dataset.id = id;

        const todoTitle = document.createElement('h3');
        todoTitle.textContent = title;

        const todoDescription = document.createElement('p');
        todoDescription.textContent = description;

        const todoDate = document.createElement('p');
        todoDate.textContent = date;

        const todoPriority = document.createElement('p');
        todoPriority.textContent = priority;

        const todoEditBtn = document.createElement('button');
        todoEditBtn.className = 'todoEditBtn'
        todoEditBtn.textContent = 'Edit';

        const todoDeleteBtn = document.createElement('button');
        todoDeleteBtn.className = 'todoDeleteBtn'
        todoDeleteBtn.textContent = 'Delete';

        // Deletes the todo from localStorage
        todoDeleteBtn.addEventListener('click', () => {
            controller.removeTodoFromProject(todo.dataset.id);
        });

        todo.appendChild(todoTitle);
        todo.appendChild(todoDescription);
        todo.appendChild(todoDate);
        todo.appendChild(todoPriority);
        todo.appendChild(todoEditBtn);
        todo.appendChild(todoDeleteBtn);

        return todo;
    }
}

export const cardHandler = new CardHandler;