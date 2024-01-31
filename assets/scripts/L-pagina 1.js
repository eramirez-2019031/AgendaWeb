document.addEventListener("DOMContentLoaded", function() {
    var contactLinks = document.querySelectorAll('.contact-link');
  
    contactLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        var nombreContacto = link.innerText;
        alert('Es un conocido cercano, Conoció a: ' + nombreContacto + ' en un viaje juntos.');
      });
  
      link.addEventListener('mouseover', function() {
        link.style.transform = 'scale(0.9)';
      });
  
      link.addEventListener('mouseout', function() {
        link.style.transform = 'scale(1)';
      });
    });
  
    var createContactButton = document.querySelector('.create-contact-button');
  
    createContactButton.addEventListener('click', function() {
      alert('¡Vamos a crear un nuevo contacto!');
      window.location.href = 'pagina';
    });
  });
  