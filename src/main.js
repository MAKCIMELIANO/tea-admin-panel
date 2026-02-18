import './style.css';
import instance from '@api/instance';
import { renderTeaTable } from '@render/tea-list';

async function initAdminPanel() {
  try {
    const response = await instance.get('/teas');
    // Учитываем твою структуру данных: response.data.data.data
    const teas = response.data.data.data;

    document.querySelector('#app').innerHTML = `
      <div class="container">
        <header>
          <h1>Управление чаем (Total: ${response.data.data.totalItems})</h1>
          <button id="add-tea" class="btn-primary">Добавить новый чай</button>
        </header>
        <div id="tea-list"></div>
      </div>
    `;

    renderTeaTable(teas);
  } catch (error) {
    console.error('Ошибка:', error);
    document.querySelector('#app').innerHTML =
      `<h1>Ошибка загрузки данных</h1>`;
  }
}

initAdminPanel();
