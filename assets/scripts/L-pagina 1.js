document.addEventListener("DOMContentLoaded", function () {
  const createContactLink = document.getElementById("create-contact-link");

  createContactLink.addEventListener("click", function (event) {
    event.preventDefault();

    const confirmCreation = confirm("¿Deseas crear un nuevo contacto?");
    
    if (confirmCreation) {
      window.location.href = "../pages/pagina2.html";
    }
  });
});

function showContactDetails(contactId) {
  const detailsPageUrl = `path/to/contact_details.html?contactId=${contactId}`;
  window.location.href = detailsPageUrl;
}