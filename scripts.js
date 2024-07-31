document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        { title: "Calculator using C++", description: "A basic calculator application developed using C++." },
        { title: "Calculator using Python", description: "A simple calculator application built with Python." },
        { title: "NSONS website", description: "A running and deployed website for NSONS." },
        { title: "Laundry app using Flutter", description: "A mobile application for laundry services built using Flutter." },
        { title: "Car management system in OOP", description: "A car management system developed using Object-Oriented Programming principles." },
        { title: "Inventory store in Blazor", description: "An inventory management system created using Blazor." },
        { title: "Location tracker app in Flutter", description: "A location tracking app currently in the working phase, developed using Flutter." },
        { title: "University portal using Blazor", description: "A university portal that is deployed and running, built with Blazor." }
    ];

    const projectContainer = document.getElementById('project-container');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        const projectTitle = document.createElement('div');
        projectTitle.className = 'project-title';
        projectTitle.textContent = project.title;

        const projectDescription = document.createElement('div');
        projectDescription.className = 'project-description';
        projectDescription.textContent = project.description;

        projectCard.appendChild(projectTitle);
        projectCard.appendChild(projectDescription);
        projectContainer.appendChild(projectCard);
    });
});
