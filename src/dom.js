class DomController {

    projectCard(title) {

        const projectCard = document.createElement('div');
        projectCard.className = 'project'
        projectCard.textContent = title;

        return projectCard;
    }
}