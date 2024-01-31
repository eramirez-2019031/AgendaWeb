document.addEventListener("DOMContentLoaded", function () {
  const createContactLink = document.getElementById("create-contact-link");

  // Agrega un evento de clic al enlace
  createContactLink.addEventListener("click", function (event) {
    event.preventDefault();

    const confirmCreation = confirm("¿Deseas crear un nuevo contacto?");
    
    if (confirmCreation) {
      window.location.href = "../pages/pagina2.html";
    }
  });
});
