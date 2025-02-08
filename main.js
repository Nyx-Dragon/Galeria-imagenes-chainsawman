document.addEventListener("DOMContentLoaded", () => {
    const characters = document.querySelectorAll(".character-card");
    const images = document.querySelectorAll(".character-img");

    images.forEach(img => {
        img.addEventListener("load", () => {
            img.classList.add("visible");
        });
        // For cached images
        if (img.complete) {
            img.classList.add("visible");
        }
    });

    characters.forEach(card => {
        const editButton = card.querySelector(".edit-btn");
        const deleteButton = card.querySelector(".delete-btn");

        editButton.addEventListener("click", () => {
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
        });

        deleteButton.addEventListener("click", () => {
            const name = card.getAttribute("data-name");
            const confirmation = confirm(`¿Seguro que deseas eliminar a ${name}?`);
            if (confirmation) {
                card.remove();
            }
        });
    });
});
