import { ProjectGenerator } from "./project.js";

/**
 * Handles all data related operations
 * Acts as a data layer
 */
class DataManager {
    // Converts data to JSON and saves o LocalStorage
    saveData(data) {
        localStorage.setItem('projects', JSON.stringify(data));
    }

    /**
     * Retrieves data from localStorage or returns an empty array if nothing exists. 
     * Required for safe initialization of application
     */
    savedDataChecker() {
        const savedData = JSON.parse(localStorage.getItem('projects'));
        if (savedData) {
            return savedData;
        } else {
            return [];
        }
    }

    /**
     * Rebuilds Project instances from LocalStorage.
     * Required to restore project methods lost during JSON stringification.
     */
    savedProjectReconstructor() {
        const rawData = JSON.parse(localStorage.getItem('projects'));

        const reconstructedProjects = rawData.map(project => 
            new ProjectGenerator(project.title, project.id, project.todos)
        );

        return reconstructedProjects;
    }

    /**
     * Rebuilds todo instances in the projects
     * Required to restore todo methods lost during JSON stringification.
     */
    savedDataReconstructor() {
        const projects = this.savedProjectReconstructor();
        projects.map(project => project.todoReconstructor());
        return projects;
    }
}

export const dataManager = new DataManager;
