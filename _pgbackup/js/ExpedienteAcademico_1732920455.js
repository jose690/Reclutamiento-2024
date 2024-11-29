//actualizar datos
document.addEventListener('DOMContentLoaded', () => {
    const openPopup = document.getElementById('openPopupTitulo');
    const popup = document.getElementById('popupTitulo');
    const editForm = document.getElementById('editFormTitulo');

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
        popup.classList.add('hiddenTitulo');
    });
});