// Script global para inicializar sidebar y tema
import {
  toggleSidebar,
  closeAllSubMenus,
  updateSidebarAlignment,
  toggleSubMenu,
} from '../utils/sidebar';
import { toggleTheme, setThemeIcon, loadTheme } from '../utils/theme';

export function initSidebar(): void {
  // Elementos del DOM
  const toggleButton = document.getElementById('toggle-btn');
  const sidebar = document.getElementById('sidebar');
  const themeButton = document.getElementById('theme-btn');

  if (sidebar && toggleButton && themeButton) {
    // Event listeners para el botón de toggle
    toggleButton.addEventListener('click', () => {
      toggleSidebar(sidebar, toggleButton);
    });

    // Event listener para el botón de tema
    themeButton.addEventListener('click', () => {
      toggleTheme(themeButton);
    });

    // Cerrar sidebar al hacer click fuera
    document.addEventListener('click', (event) => {
      if (sidebar.classList.contains('close')) return;
      if (sidebar.contains(event.target as Node)) return;

      toggleSidebar(sidebar, toggleButton);
    });

    // Cargar tema al iniciar
    loadTheme();
    setThemeIcon(themeButton);

    // Actualizar alineación del sidebar
    let resizeTimeout: ReturnType<typeof setTimeout>;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => updateSidebarAlignment(sidebar), 250);
    });
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => updateSidebarAlignment(sidebar), 250);
    });
  }

  // Efecto de header (ocultar al scroll hacia abajo)
  let lastScrollY = window.scrollY;
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    if (!header) return;
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
      header.classList.add('hide-on-scroll');
    } else {
      header.classList.remove('hide-on-scroll');
    }
    lastScrollY = window.scrollY;
  });
}
