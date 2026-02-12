const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

function closeAllSubMenus() {
  Array.from(sidebar.getElementsByClassName('show')).forEach((ul) => {
    ul.classList.remove('show');
    ul.previousElementSibling.classList.remove('rotate');
  });
}

function toggleSidebar() {
  console.log('Precionar boton del sidebar');

  sidebar.classList.toggle('close');
  toggleButton.classList.toggle('rotate');

  closeAllSubMenus();
}

function toggleSubMenu(button) {
  console.log('Precionar boton del sidebar para el sub menu');

  if (!button.nextElementSibling.classList.contains('show')) {
    closeAllSubMenus();
  }

  button.nextElementSibling.classList.toggle('show');
  button.classList.toggle('rotate');

  if (sidebar.classList.contains('close')) {
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
  }
}
