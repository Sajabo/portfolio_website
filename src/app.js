import { ShaderArt } from 'https://cdn.skypack.dev/shader-art';
ShaderArt.register();

document.addEventListener("DOMContentLoaded", () => {
    fetch("./src/projects.json") // Adjust path if necessary
        .then(response => response.json())
        .then(projects => displayProjects(projects))
        .catch(error => console.error("Error loading projects:", error));
});

function displayProjects(projects) {
    const projectContainer = document.getElementById("projects"); // Ensure this div exists in index.html
    projectContainer.innerHTML = "";

    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project-card");

        projectElement.innerHTML = `
            <h2 class="text-2xl font-bold text-accent">${project.title}</h2>
            <p class="text-secondary">${project.summary}</p>
            <p><strong>Tech Used:</strong> ${project.technologies.join(", ")}</p>
            <a href="${project.repo}" target="_blank" class="text-blue-500">View Repo</a>
        `;

        projectContainer.appendChild(projectElement);
    });
}
