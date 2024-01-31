document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const contactName = urlParams.get('name');
  
    const contacts = [
      { name: "Juan Pérez", email: "juanitoxdxdxdx.com", phone: "555-1234", address: "Capital de Guatemala, zona 7" },
      { name: "La Mariana", email: "miarianita.com", phone: "555-5678", address: "Capital de Guatemala, zona 5" },
      { name: "Casimiro Buenavista", email: "Buenavista.com", phone: "555-3467", address: "Huhuetenango" },
      { name: "Paquita la del narrio", email: "paquis123.com", phone: "555-4254", address: "Chimaltenango" },
      { name: "Alex Marin", email: "nosequehacerconmivida.com", phone: "555-3414", address: "Capital de Guatemala" },
    ];
  
    const selectedContact = contacts.find(contact => contact.name === contactName);
  
    if (selectedContact) {
      const contactDetailsElement = document.getElementById('contact-details');
      contactDetailsElement.innerHTML = `
        <strong>Email:</strong> ${selectedContact.email}<br>
        <strong>Teléfono:</strong> ${selectedContact.phone}<br>
        <strong>Dirección:</strong> ${selectedContact.address}<br>
      `;
    } else {
      alert('Contacto no encontrado');
    }
});
