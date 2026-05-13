import SunIcon from '../../assets/icons/24dp/light_mode.svg?raw';
import MoonIcon from '../../assets/icons/24dp/dark_mode.svg?raw';

export function setThemeIcon(themeButton: HTMLElement | null): void {
  if (!themeButton) return;

  const svgContainer = themeButton.querySelector('div') as HTMLDivElement | null;
  const span = themeButton.querySelector('span');

  if (!svgContainer || !span) return;

  if (document.body.classList.contains('dark')) {
    svgContainer.innerHTML = MoonIcon;
    span.textContent = 'Modo oscuro';
    document.documentElement.style.backgroundColor = 'black';
  } else {
    svgContainer.innerHTML = SunIcon;
    span.textContent = 'Modo claro';
    document.documentElement.style.backgroundColor = 'white';
  }
}

export function toggleTheme(themeButton: HTMLElement | null): void {
  document.body.classList.toggle('dark');

  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');

  setThemeIcon(themeButton);
}

export function loadTheme(): void {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    if (!document.body.classList.contains('dark')) {
      document.body.classList.add('dark');
    }
  } else {
    document.body.classList.remove('dark');
  }
}
