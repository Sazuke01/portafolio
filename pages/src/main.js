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

// centrar el sidebar o ajustar si excede el ancho
function updateSidebarAlignment() {
  const sidebarUl = document.querySelector('#sidebar ul');
  if (!sidebarUl) return;

  // Quita ambas clases
  sidebarUl.classList.remove('centered', 'scrolled');

  // Si el contenido cabe, centra; si no, alinea a la izquierda
  if (sidebarUl.scrollWidth <= sidebarUl.clientWidth) {
    sidebarUl.classList.add('centered');
  } else {
    sidebarUl.classList.add('scrolled');
  }
}

// Ejecuta al cargar y al cambiar tamaño: 1000 = 1 segundo
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(updateSidebarAlignment, 250);
});
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(updateSidebarAlignment, 250);
});
// window.addEventListener('load', updateSidebarAlignment);
// window.addEventListener('orientationchange', updateSidebarAlignment);

// efecto header
let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (!header) return;
  if (window.scrollY > lastScrollY && window.scrollY > 50) {
    // Scroll hacia abajo
    header.classList.add('hide-on-scroll');
  } else {
    // Scroll hacia arriba
    header.classList.remove('hide-on-scroll');
  }
  lastScrollY = window.scrollY;
});
