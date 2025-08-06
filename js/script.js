// Acá podés agregar tus funciones JS personalizadas más adelante
console.log("Portafolio cargado");

// Animación fade-in-up al hacer scroll
const elementos = document.querySelectorAll('.fade-in-up');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

elementos.forEach(el => observer.observe(el));
