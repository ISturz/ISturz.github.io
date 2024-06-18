function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.className = 'drop';
    raindrop.style.left = `${random(0, window.innerWidth)}px`;
    raindrop.style.top = `${random(-100, -10)}px`; // Start above the visible area
    document.getElementById('rain').appendChild(raindrop);
}

document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i < 100; i++) {
        createRaindrop();
    }
});