// Funciones para manejar el sidebar

export function closeAllSubMenus(sidebar: HTMLElement): void {
  Array.from(sidebar.getElementsByClassName('show')).forEach((ul) => {
    ul.classList.remove('show');
    ul.previousElementSibling?.classList.remove('rotate');
  });
}

export function toggleSidebar(sidebar: HTMLElement, toggleButton: HTMLElement): void {
  sidebar.classList.toggle('close');
  toggleButton.classList.toggle('rotate');

  closeAllSubMenus(sidebar);
}

export function toggleSubMenu(
  button: HTMLElement,
  sidebar: HTMLElement,
  toggleButton: HTMLElement,
): void {
  if (!button.nextElementSibling?.classList.contains('show')) {
    closeAllSubMenus(sidebar);
  }

  button.nextElementSibling?.classList.toggle('show');
  button.classList.toggle('rotate');

  if (sidebar.classList.contains('close')) {
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
  }
}

export function updateSidebarAlignment(sidebar: HTMLElement): void {
  const sidebarUl = sidebar.querySelector('#sidebar ul');
  if (!sidebarUl) return;

  sidebarUl.classList.remove('centered', 'scrolled');

  if ((sidebarUl as HTMLElement).scrollWidth <= sidebarUl.clientWidth) {
    sidebarUl.classList.add('centered');
  } else {
    sidebarUl.classList.add('scrolled');
  }
}
