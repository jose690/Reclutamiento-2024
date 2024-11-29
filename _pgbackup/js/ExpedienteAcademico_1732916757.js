//actualizar datos
document.addEventListener('DOMContentLoaded', () => {
    const openPopup = document.getElementById('openPopupTitulo');
    const popup = document.getElementById('popupTitulo');
    const editForm = document.getElementById('editFormTitulo');

    const basePhone = document.getElementById('basePhone');
    const baseEmail = document.getElementById('baseEmail');
    const newPhone = document.getElementById('newPhone');
    const newEmail = document.getElementById('newEmail');

    openPopup.addEventListener('click', () => {
        popup.classList.remove('hiddenTitulo');
    });

    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.add('hiddenTitulo');
        }
    });

    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        basePhone.textContent = newPhone.value;
        baseEmail.textContent = newEmail.value;
        popup.classList.add('hiddenTitulo');
    });
});