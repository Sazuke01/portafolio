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

function toggleTheme(button) {
  document.body.classList.toggle('dark');

  // Guarda el estado en localStorage
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');

  const img = button.querySelector('img');
  const span = button.querySelector('span');

  if (document.body.classList.contains('dark')) {
    img.src = 'pages/icons/24dp/light_mode.svg';
    span.textContent = 'Modo claro';
  } else {
    img.src = 'pages/icons/24dp/dark_mode.svg';
    span.textContent = 'Modo oscuro';
  }
}

// cerrar el sidebar para click en otras zonas
document.addEventListener('click', function (event) {
  if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
    sidebar.classList.add('close');
    toggleButton.classList.remove('rotate');
  }
});

// Cargar tema
document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    if (!document.body.classList.contains('dark')) {
      document.body.classList.add('dark');
    }
  } else {
    document.body.classList.remove('dark');
  }
});
