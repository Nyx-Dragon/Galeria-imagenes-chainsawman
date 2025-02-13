// Añade la clase "visible" a la imagen cargada
function handleImageLoad(image) {
    image.classList.add("visible");
}

// Inicializa el manejo de imágenes
function initImageHandling() {
    // Selecciona todas las imágenes con la clase "character-img"
    const images = document.querySelectorAll(".character-img");
    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        // Añade el evento "load" para manejar la carga de imágenes
        image.addEventListener("load", () => handleImageLoad(image));
        // Si la imagen ya está completamente cargada, maneja la carga
        if (image.complete) {
            handleImageLoad(image);
        }
    }
}

// Maneja el clic en el botón de edición
function handleEditButtonClick(card) {
    const name = card.getAttribute("data-name");
    let newRole = prompt(`Editar descripción de ${name}:`, card.getAttribute("data-role"));
    while (newRole && newRole.trim() === "") {
        alert("La descripción no puede estar vacía. Por favor, introduce una descripción válida.");
        newRole = prompt(`Editar descripción de ${name}:`, card.getAttribute("data-role"));
    }
    if (newRole) {
        card.querySelector("p").textContent = newRole;
        card.setAttribute("data-role", newRole);
    }
}

// Maneja el clic en el botón de eliminación
function handleDeleteButtonClick(card) {
    const name = card.getAttribute("data-name");
    const confirmation = confirm(`¿Seguro que deseas eliminar a ${name}?`);
    if (confirmation) {
        card.remove();
    }
}

// Inicializa el manejo de botones
function initButtonHandling() {
    const characters = document.querySelectorAll(".character-card");
    for (let i = 0; i < characters.length; i++) {
        const card = characters[i];
        const editButton = card.querySelector(".edit-btn");
        const deleteButton = card.querySelector(".delete-btn");

        // Añade el evento "click" para manejar la edición de la tarjeta
        editButton.addEventListener("click", () => handleEditButtonClick(card));
        // Añade el evento "click" para manejar la eliminación de la tarjeta
        deleteButton.addEventListener("click", () => handleDeleteButtonClick(card));
    }
}

// Inicializa los manejadores cuando el documento está completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    initImageHandling();
    initButtonHandling();
});
