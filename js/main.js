document.addEventListener('DOMContentLoaded', () => { 
  // ---------- Idioma ----------
  function setLanguage(lang) {
    // Guarda el idioma elegido en el almacenamiento local del navegador
    localStorage.setItem('language', lang);

    // Verifica si el idioma seleccionado es español
    const showEs = (lang === 'es');

    // Muestra u oculta los elementos en español
    document.querySelectorAll('.lang-es').forEach(el => {
      el.style.display = showEs ? '' : 'none';
    });

    // Muestra u oculta los elementos en inglés
    document.querySelectorAll('.lang-en').forEach(el => {
      el.style.display = showEs ? 'none' : '';
    });

    // Definición de textos para placeholders según idioma
    const placeholders = {
      es: {
        name: "Nombre",
        email: "Correo electrónico",
        message: "Mensaje"
      },
      en: {
        name: "Name",
        email: "Email address",
        message: "Message"
      }
    };

    // Cambia el placeholder del campo "name" y el label
    if (document.querySelector("#name")) {
      document.querySelector("#name").placeholder = placeholders[lang].name;
      document.querySelector("#label_name").textContent = placeholders[lang].name;
    }

    // Cambia el placeholder del campo "email" y el label
    if (document.querySelector("#email")) {
      document.querySelector("#email").placeholder = placeholders[lang].email;
      document.querySelector("#label_email").textContent = placeholders[lang].email;
    }

    // Cambia el placeholder del campo "message" y el label
    if (document.querySelector("#message")) {
      document.querySelector("#message").placeholder = placeholders[lang].message;
      document.querySelector("#label_msg").textContent = placeholders[lang].message;
    }

    // Cambia el texto de botones según el idioma
    if(document.querySelector("#send")){
      const btn = document.querySelector("#send");
      if(lang === "es"){
        btn.textContent = "Enviar";
        btn.setAttribute("aria-label", "Enviar");
        document.getElementById("nav_btn").setAttribute("aria-label", "Abrir menú de navegación");
      }
      if(lang === "en"){
        btn.textContent = "Send";
        btn.setAttribute("aria-label", "Send");
        document.getElementById("nav_btn").setAttribute("aria-label", "Open navigation menu");
      }
    }

    //Cambia texto de la página de agradecimiento
    if(document.querySelector("#title")){
      const title = document.querySelector("#title");
      const msgText = document.querySelector("#message_thank");
      const btnBackHome = document.querySelector("#back_home");
      if(lang === "es"){
        title.textContent = "¡Gracias por contactarme!";
        msgText.textContent = "Tu mensaje fue recibido y me pondré en contacto contigo pronto.";
        btnBackHome.textContent = "Volver al inicio";
      }
      if(lang === "en"){
        title.textContent = "Thank you for contacting me!";
        msgText.textContent = "Your message has been received and I will get in touch with you soon.";
        btnBackHome.textContent = "Back to home";
      }
    }
  }

  // Obtiene el idioma guardado o usa español por defecto
  const savedLang = localStorage.getItem('language') || 'es';
  setLanguage(savedLang);

  // Maneja el selector de idioma
  const selector = document.getElementById('languageSelector');
  if (selector) {
    // Oculta el selector en la página "gracias.html"
    if (window.location.pathname.includes('contact_confirmation.html')) {
      selector.style.display = 'none';
    } else {
      // Establece el valor del selector al idioma guardado
      selector.value = savedLang;
      // Cambia el idioma cuando el usuario selecciona otro
      selector.addEventListener('change', (e) => setLanguage(e.target.value));
    }
  }

  // ---------- Formulario ----------
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      // Evita que el formulario recargue la página
      e.preventDefault();

      try {
        // Toma los datos del formulario
        const formData = new FormData(form);

        // Envía los datos al servidor usando Fetch API
        const resp = await fetch(form.action, {
          method: form.method || 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        // Si la respuesta es correcta, redirige a "gracias.html"
        if (resp.ok) {
          console.log("Formulario enviado correctamente");
          window.location.href = 'contact_confirmation.html';
        } else {
          // Si hay error en la respuesta, muestra alerta
          alert('Ups, hubo un error enviando el formulario.');
        }
      } catch (err) {
        // Si ocurre un error en la conexión, muestra alerta
        alert('Ups, hubo un error enviando el formulario.');
      }
    });
  }
});
