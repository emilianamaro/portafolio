
console.log("Entro al main");

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return; // por si no está la página con formulario

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        window.location.href = 'gracias.html';
      } else {
        alert('Ups, hubo un error enviando el formulario.');
      }
    })
    .catch(() => alert('Ups, hubo un error enviando el formulario.'));
  });
});
