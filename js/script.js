
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

// Formulario
const formulario = document.querySelector("form");
const mensaje = document.getElementById("mensaje-enviado");

if (formulario && mensaje) {
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        mensaje.style.display = "block";
        mensaje.style.opacity = 0;
        mensaje.style.transition = "opacity 0.5s ease-in-out";
        setTimeout(() => mensaje.style.opacity = 1, 10);
        formulario.reset();
        setTimeout(() => mensaje.style.opacity = 0, 3000);
    });
}
