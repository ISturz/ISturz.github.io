function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.className = 'drop';
    raindrop.style.left = `${random(0, window.innerWidth)}px`;
    raindrop.style.top = `${random(-120, -10)}px`; // Start above the visible area
    raindrop.style.animationDuration = `${random(2, 5)}s`; // Adjust this range to change speed
    raindrop.style.animationDelay = `${random(0, 5)}s`; // Randomize start time
    document.getElementById('rain').appendChild(raindrop);

    // Remove the raindrop after its animation ends to avoid cluttering the DOM
    raindrop.addEventListener('animationend', function() {
        raindrop.remove();
        createRaindrop(); // Create a new raindrop to maintain the rain effect
    });
}

document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i < 100; i++) {
        createRaindrop();
    }
});
