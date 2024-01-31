document.addEventListener("DOMContentLoaded", function() {

  var formulario = document.getElementById('login-form');
  formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 

    var usuario = document.getElementById('usuario').value;

    alert(usuario + ' Bienvenido al sistema');

    window.location.href = '../AgendaWeb/assets/pages/pagina1.html';
  });
});
