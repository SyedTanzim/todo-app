import { controller } from "./controller.js";

const dataArray = controller.getData();

class DomController {

    projectCard(title) {

        const projectCard = document.createElement('div');
        projectCard.className = 'project'
        projectCard.textContent = title;

        return projectCard;
    }

    todoCard(title, description, date, priority) {
        const todo = document.createElement('div');
        todo.className = 'todo';

        const todoTitle = document.createElement('h3');
        todoTitle.textContent = title;

        const todoDescription = document.createElement('p');
        todoDescription.textContent = description;

        const todoDate = document.createElement('p');
        todoDate.textContent = date;

        const todoPriority = document.createElement('p');
        todoPriority.textContent = priority;

        todo.appendChild(todoTitle);
        todo.appendChild(todoDescription);
        todo.appendChild(todoDate);
        todo.appendChild(todoPriority);

        return todo;
    }

    renderApp() {
        const mainContainer = document.querySelector('#mainContainer');
        const projectContainer = document.querySelector('#projectContainer');
        projectContainer.textContent = ''
        const todoContainer = document.querySelector('#todoContainer');

        dataArray.forEach(project => {
            const projectCard = this.projectCard(project.title);

            projectCard.addEventListener('click', () => {
                todoContainer.textContent = '';
                project.todos.forEach(todo => {
                    const todoCard = this.todoCard(todo.title, todo.description, todo.date, todo.priority);
                    todoContainer.appendChild(todoCard);
                });
            });
            projectContainer.appendChild(projectCard);

        });
        mainContainer.appendChild(projectContainer);
        mainContainer.appendChild(todoContainer);
    }


    showProjectForm() {
        const projectModal = document.querySelector('#projectModal');
        const addProjectBtn = document.querySelector('#addProjectBtn');

        addProjectBtn.addEventListener('click', () => {
            projectModal.show();
        });
    }

    hideProjectForm() {
        const projectModal = document.querySelector('#projectModal');
        const closeProjectModalBtn = document.querySelector('#closeProjectModalBtn');
        closeProjectModalBtn.addEventListener('click', () => {
            projectModal.close();
        })
    }
}

const dom = new DomController;
dom.renderApp();
dom.showProjectForm();
dom.hideProjectForm();
dom.submitProjectForm();