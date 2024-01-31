document.addEventListener("DOMContentLoaded", function () {

    const guardarContactoBtn = document.getElementById("guardar-contacto-btn");
  
    guardarContactoBtn.addEventListener("click", function (event) {
      event.preventDefault();
  
      alert("Contacto guardado");
  
      window.location.href = "../pages/pagina1.html";
    });
  });
  