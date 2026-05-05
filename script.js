const toggleBtn = document.getElementById('dark-mode-toggle');
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');
const body = document.body;

// Revisar si el usuario ya tenía el modo oscuro activado antes
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'inline-block';
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        // Modo Oscuro Activado
        localStorage.setItem('dark-mode', 'enabled');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline-block';
    } else {
        // Modo Oscuro Desactivado
        localStorage.setItem('dark-mode', 'disabled');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
    }
});