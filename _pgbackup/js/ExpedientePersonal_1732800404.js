// script.js
document.addEventListener('DOMContentLoaded', () => {
    const openPopup = document.getElementById('openPopupDatos');
    const popup = document.getElementById('popupDatos');
    const editForm = document.getElementById('editFormDatos');

    const basePhone = document.getElementById('basePhone');
    const baseEmail = document.getElementById('baseEmail');
    const newPhone = document.getElementById('newPhone');
    const newEmail = document.getElementById('newEmail');

    // Abrir la ventana emergente
    openPopup.addEventListener('click', () => {
        popup.classList.remove('hiddenDatos');
        newPhone.value = "";
        newEmail.value = "";
    });

    // Cerrar la ventana al hacer clic fuera del contenido
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.add('hiddenDatos');
        }
    });

    // Manejar el envío del formulario
    editForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evitar recarga de la página
        basePhone.textContent = newPhone.value; // Actualizar el título
        baseEmail.textContent = newEmail.value; // Actualizar el párrafo
        popup.classList.add('hiddenDatos'); // Cerrar la ventana emergente
    });
});

