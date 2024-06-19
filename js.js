function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.className = 'drop';
    raindrop.style.left = `${random(0, window.innerWidth)}px`;
    raindrop.style.top = `${random(-120, -10)}px`; // To Start above the visible area
    raindrop.style.animationDuration = `${random(1, 1000)}ms`; // Adjust this range to change speed
    raindrop.style.animationDelay = `${random(0, 10)}s`; // Randomize start time
    document.getElementById('rain').appendChild(raindrop);

    // Remove the raindrop after its animation ends to avoid cluttering the DOM
    raindrop.addEventListener('animationend', function() {
        raindrop.remove();
        createRaindrop(); // Create a new raindrop to maintain the rain effect
    });
}

function createLightning() {
    const lightning = document.createElement('div');
    lightning.className = 'lightning';
    lightning.style.left = `${random(0, window.innerWidth)}px`;
    lightning.style.top = `${random(0, 1)}px`;
    lightning.style.height = `${random(50, window.innerHeight)}px`; // Randomize the height between 50px and the full height of the viewport
    lightning.style.width = `${random(1, 4)}px`;
    document.getElementById('rain').appendChild(lightning);

    // Remove the lightning after its animation ends to avoid cluttering the DOM
    lightning.addEventListener('animationend', function() {
        lightning.remove();
    });

    // Schedule the next lightning flash
    setTimeout(createLightning, random(2000, 5000)); // Random interval between 5 and 20 seconds
}


    // Function to toggle the description of the project
    function toggleDescription(projectElement) {
        const activeProject = document.querySelector('.project.active');

        // If there is an active project that is not the one being clicked, collapse it
        if (activeProject && activeProject !== projectElement) {
            activeProject.classList.remove('active');
        }

        // Toggle the active state of the clicked project
        projectElement.classList.toggle('active');
    }

    // Add event listeners to all projects
    document.querySelectorAll('.project').forEach(project => {
        project.addEventListener('click', function(event) {
            // Check if the clicked element is the image or the project container
            if (event.target.tagName === 'IMG' || event.target.classList.contains('project')) {
                toggleDescription(project); // Toggle the description
            }
        });
    });



document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i < 100; i++) {
        createRaindrop();
    }
    createLightning(); //To Start the effecr
});
