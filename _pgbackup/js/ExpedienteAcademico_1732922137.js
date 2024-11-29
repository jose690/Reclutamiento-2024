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
    const openPopupI = document.getElementById('openPopupInstitucion');
    const popupI = document.getElementById('popupInstitucion');
    const editFormI = document.getElementById('editFormInstitucion');

    openPopupI.addEventListener('click', () => {
        popupI.classList.remove('hiddenInstitucion');
    });

    popupI.addEventListener('click', (e) => {
        if (e.target === popupI) {
            popupI.classList.add('hiddenInstitucion');
        }
    });

    editFormI.addEventListener('submit', (e) => {
        popupI.classList.add('hiddenInstitucion');
    });
});