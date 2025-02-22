document.addEventListener('DOMContentLoaded', () => {
    createHearts();
    initMusic();
});

function createHearts() {
    const heartsContainer = document.querySelector('.hearts');
    for(let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            font-size: ${Math.random() * 30 + 20}px;
            animation: heartFloat ${Math.random() * 5 + 5}s linear infinite;
            opacity: ${Math.random() * 0.5 + 0.5};
        `;
        heart.innerHTML = '❤️';
        heartsContainer.appendChild(heart);
    }
}

function initMusic() {
    const audio = new Audio('assets/musica.mp3');
    const btn = document.querySelector('.music-btn');
    
    btn.addEventListener('click', () => {
        audio.loop = true;
        audio.play();
        btn.innerHTML = '🎵 Nuestra canción sonando...';
        btn.disabled = true;
    });
}