document.addEventListener("DOMContentLoaded", function () {
    initImageHandling();
    initButtonHandling();
    initMusicControls();
});

// Añade la clase "visible" a la imagen cargada
function handleImageLoad(image) {
    image.classList.add("visible");
}

// Inicializa el manejo de imágenes
function initImageHandling() {
    const images = document.querySelectorAll(".character-img");
    images.forEach(image => {
        image.addEventListener("load", () => handleImageLoad(image));
        if (image.complete) {
            handleImageLoad(image);
        }
    });
}

// Maneja el clic en el botón de edición
function handleEditButtonClick(card) {
    const name = card.getAttribute("data-name");
    let newRole = prompt(`Editar descripción de ${name}:`, card.getAttribute("data-role"));
    
    while (newRole && newRole.trim() === "") {
        alert("La descripción no puede estar vacía. Introduce una descripción válida.");
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
    if (confirm(`¿Seguro que deseas eliminar a ${name}?`)) {
        card.remove();
    }
}

// Inicializa el manejo de botones de edición y eliminación
function initButtonHandling() {
    const characters = document.querySelectorAll(".character-card");
    characters.forEach(card => {
        const editButton = card.querySelector(".edit-btn");
        const deleteButton = card.querySelector(".delete-btn");

        if (editButton) editButton.addEventListener("click", () => handleEditButtonClick(card));
        if (deleteButton) deleteButton.addEventListener("click", () => handleDeleteButtonClick(card));
    });
}

// Inicializa el reproductor de música
function initMusicControls() {
    const audio = document.getElementById("background-music");
    const playButton = document.getElementById("play-music");
    const volumeControl = document.getElementById("volume-control");

    if (playButton && audio) {
        playButton.addEventListener("click", function () {
            if (audio.paused) {
                audio.play();
                playButton.textContent = "Pausar";
            } else {
                audio.pause();
                playButton.textContent = "Reproducir";
            }
        });
    }

    if (volumeControl && audio) {
        volumeControl.addEventListener("input", function () {
            audio.volume = volumeControl.value;
        });
    }
}
