// -----------------------------
// Mensaje en consola al cargar
// -----------------------------
console.log("Portafolio cargado");

// -----------------------------
// Animación fade-in-up al hacer scroll
// -----------------------------

// Selecciona todos los elementos que tendrán la animación
const elementos = document.querySelectorAll('.fade-in-up');

// Crea un IntersectionObserver para detectar cuando los elementos entran en la vista
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Cuando el elemento es visible, le agrega la clase 'visible'
            entry.target.classList.add('visible');
        }
    });
});

// Observa cada elemento seleccionado
elementos.forEach(el => observer.observe(el));
