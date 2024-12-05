const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const menuIconOpen = document.getElementById("menu-icon-open");
const menuIconClose = document.getElementById("menu-icon-close");

// Toggle the mobile menu visibility
mobileMenuButton.addEventListener("click", () => {
  // Toggle the menu visibility
  if (mobileMenu.style.display === "none" || mobileMenu.style.display === "") {
    mobileMenu.style.display = "block"; // Show the menu
  } else {
    mobileMenu.style.display = "none"; // Hide the menu
  }

  // Toggle the icons
  menuIconOpen.classList.toggle("hidden");
  menuIconClose.classList.toggle("hidden");
});

function toggleAccordion(section) {
  const content = document.getElementById(`content-${section}`);
  const icon = document.getElementById(`icon-${section}`);
  const isHidden = content.classList.contains("hidden");

  // Cerrar todos los acordeones
  document
    .querySelectorAll('[id^="content-"]')
    .forEach((el) => el.classList.add("hidden"));
  document
    .querySelectorAll('[id^="icon-"]')
    .forEach((el) => el.classList.remove("rotate-180"));

  // Alternar el acordeón seleccionado
  if (isHidden) {
    content.classList.remove("hidden");
    icon.classList.add("rotate-180");
  }
}

document.getElementById("petForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtener los valores del formulario
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const pet = document.getElementById("pet").value;

  // Crear un nuevo elemento de la lista
  const listItem = document.createElement("li");
  listItem.className = "bg-gray-100 p-4 rounded-md shadow-md";
  listItem.textContent = `Nombre: ${name}, Correo: ${email}, Edad: ${age}, Mascota: ${pet}`;

  // Agregar el elemento a la lista
  const ulElement = document.getElementById("newlist");
  ulElement.appendChild(listItem);

  // Limpiar el formulario
  event.target.reset();
});
