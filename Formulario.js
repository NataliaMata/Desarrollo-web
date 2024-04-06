document.addEventListener("DOMContentLoaded", function() {
    const showFormBtn = document.getElementById("showFormBtn");
    const registrationForm = document.getElementById("registrationForm");
    const purchaseDetails = document.getElementById("purchaseDetails");

    showFormBtn.addEventListener("click", function() {
        showFormBtn.style.display = "none";
        registrationForm.classList.remove("hidden");
    });

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const ticketType = document.getElementById("ticketType").value;

        if (fullName && email && phone && ticketType) {
            displayPurchaseDetails(fullName, email, phone, ticketType);
            registrationForm.reset();
            registrationForm.classList.add("hidden");
            purchaseDetails.classList.remove("hidden");
        } else {
            alert("Por favor completa todos los campos.");
        }
    });

    function displayPurchaseDetails(fullName, email, phone, ticketType) {
        document.getElementById("fullNameDisplay").textContent = "Nombre Completo: " + fullName;
        document.getElementById("emailDisplay").textContent = "Correo Electrónico: " + email;
        document.getElementById("phoneDisplay").textContent = "Número de Teléfono: " + phone;
        document.getElementById("ticketTypeDisplay").textContent = "Tipo de Entrada: " + ticketType;
    }
});
