// Generar corazones animados
function crearCorazones() {
    const corazonesContainer = document.querySelector('.corazones');
    for (let i = 0; i < 20; i++) {
        const corazon = document.createElement('div');
        corazon.className = 'corazon';
        corazon.innerHTML = '❤️';
        corazon.style.left = Math.random() * 100 + 'vw';
        corazon.style.animationDelay = Math.random() * 5 + 's';
        corazon.style.fontSize = Math.random() * 20 + 10 + 'px';
        corazonesContainer.appendChild(corazon);
    }
}

// Control de música
const musica = new Audio('assets/musica.mp3');
const botonMusica = document.querySelector('.boton-musica');

botonMusica.addEventListener('click', () => {
    musica.loop = true;
    musica.play();
    botonMusica.textContent = '🎵 Música Romántica Sonando';
    botonMusica.disabled = true;
});

// Inicializar efectos
window.addEventListener('DOMContentLoaded', crearCorazones);