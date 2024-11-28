document.addEventListener('DOMContentLoaded', () => {
    const openPopup = document.getElementById('openPopupDatos');
    const popup = document.getElementById('popupDatos');
    const editForm = document.getElementById('editFormDatos');

    const basePhone = document.getElementById('basePhone');
    const baseEmail = document.getElementById('baseEmail');
    const newPhone = document.getElementById('newPhone');
    const newEmail = document.getElementById('newEmail');

    openPopup.addEventListener('click', () => {
        popup.classList.remove('hiddenDatos');
        newPhone.value = "";
        newEmail.value = "";
    });

    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.add('hiddenDatos');
        }
    });

    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        basePhone.textContent = newPhone.value;
        baseEmail.textContent = newEmail.value;
        popup.classList.add('hiddenDatos');
    });
});