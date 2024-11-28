// script.js
document.addEventListener('DOMContentLoaded', () => {
    const openPopup = document.getElementById('openPopupDatos');
    const closePopup = document.getElementById('closePopupDatos');
    const popup = document.getElementById('popupDatos');
    const editForm = document.getElementById('editFormDatos');

    const basePhone = document.getElementById('basePhone');
    const mainParagraph = document.getElementById('mainParagraph');
    const headingInput = document.getElementById('headingInput');
    const paragraphInput = document.getElementById('paragraphInput');

    // Abrir la ventana emergente
    openPopup.addEventListener('click', () => {
        popup.classList.remove('hidden');
        headingInput.value = basePhone.textContent; // Prellenar con el contenido actual
        paragraphInput.value = mainParagraph.textContent;
    });

    // Cerrar la ventana emergente
    closePopup.addEventListener('click', () => {
        popup.classList.add('hidden');
    });

    // Cerrar la ventana al hacer clic fuera del contenido
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.add('hidden');
        }
    });

    // Manejar el envío del formulario
    editForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evitar recarga de la página
        mainHeading.textContent = headingInput.value; // Actualizar el título
        mainParagraph.textContent = paragraphInput.value; // Actualizar el párrafo
        popup.classList.add('hidden'); // Cerrar la ventana emergente
    });
});

