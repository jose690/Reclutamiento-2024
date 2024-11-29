//Agregar titulo
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

//Buscar institucion
document.addEventListener('DOMContentLoaded', () => {
    const openPopup = document.getElementById('openPopupInstitucion');
    const popup = document.getElementById('popupInstitucion');
    const editForm = document.getElementById('editFormInstitucion');

    openPopup.addEventListener('click', () => {
        popup.classList.remove('hiddenInstitucion');
    });

    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.add('hiddenInstitucion');
        }
    });

    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        popup.classList.add('hiddenInstitucion');
    });
});