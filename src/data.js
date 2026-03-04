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
        const savedData = JSON.parse(localStorage.getItem('projects'));
        const reconstructedData = savedData.map(project => new ProjectGenerator(project.title, project.id, project.todos));
        return reconstructedData;
    }
}

export const dataManager = new DataManager;