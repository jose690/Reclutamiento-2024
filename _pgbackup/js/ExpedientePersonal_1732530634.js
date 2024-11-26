//Idioma
function togglePopupIdioma() {
    const overlay = document.getElementById("popupOverlayIdioma");
    overlay.classList.toggle("show");

    if (overlay.classList.contains("show")) {
        const btnSubmit = document.getElementById("btn-submitIdioma");
        btnSubmit.addEventListener("click", handleButtonClickIdioma);
    }
}

function handleButtonClickIdioma(event) {
    event.preventDefault();
    const checkboxes = document.querySelectorAll("#popupOverlayIdioma input[type='checkbox']");
    const selectedOptions = Array.from(checkboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox =>checkbox.id);
    document.getElementById("texto_idioma").textContent = selectedOptions.join(", ");
    togglePopupIdioma();
}

document.getElementById("btn-submitIdioma").addEventListener("click", handleButtonClickIdioma);



