/**
 * Utility compartido para cargar y renderizar datos desde JSON
 */

export function escapeHtml(text: string): string {
  if (!text) return '';
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export interface LoaderConfig {
  dataUrl: string;
  containerId: string;
  renderItem: (item: any) => string;
  emptyMessage?: string;
}

export async function loadData(config: LoaderConfig): Promise<void> {
  try {
    const container = document.getElementById(config.containerId);
    if (!container) {
      console.error(`Container "${config.containerId}" no encontrado`);
      return;
    }

    const response = await fetch(config.dataUrl);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    if (!Array.isArray(data) || data.length === 0) {
      container.innerHTML = `<p>${config.emptyMessage || 'No hay datos disponibles.'}</p>`;
      return;
    }

    data.forEach((item) => {
      if (!item || typeof item !== 'object') {
        console.warn('Elemento inválido:', item);
        return;
      }

      try {
        container.insertAdjacentHTML('beforeend', config.renderItem(item));
      } catch (itemError) {
        console.warn('Error renderizando elemento:', item, itemError);
      }
    });
  } catch (error) {
    console.error(`Error cargando datos de ${config.dataUrl}:`, error);
    const container = document.getElementById(config.containerId);
    if (container) {
      container.innerHTML = '<p style="color: red;">Error al cargar los datos.</p>';
    }
  }
}
