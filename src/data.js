import { ProjectGenerator } from "./project.js";

class DataManager {

    saveData(data) {
        localStorage.setItem('projects', JSON.stringify(data));
    }

    savedDataChecker() {
        const savedData = JSON.parse(localStorage.getItem('projects'));
        if (savedData) {
            return savedData;
        } else {
            return [];
        }
    }

    savedProjectReconstructor() {
        const rawData = JSON.parse(localStorage.getItem('projects'));

        const reconstructedProjects = rawData.map(project => 
            new ProjectGenerator(project.title, project.id, project.todos)
        )

        return reconstructedProjects;
    }
}

export const dataManager = new DataManager;
