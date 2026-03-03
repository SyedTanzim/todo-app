class DataManager {

    saveData(data) {
        localStorage.setItem('projects', JSON.stringify(data));
    }

    savedDataChecker() {
        const savedData = localStorage.getItem('projects');
        if (savedData) {
            return JSON.parse(savedData);
        } else {
            return [];
        }
    }

}

export const dataManager = new DataManager;