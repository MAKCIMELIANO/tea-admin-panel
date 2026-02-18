import './style.css';
import instance from '@api/instance';
import { TeaCard } from '@render/TeaCard';
import { createIcons, Pencil, Trash2, Package, CircleDollarSign } from 'lucide';

async function renderApp() {
  const app = document.querySelector('#app');
  app.innerHTML = '<h2>Загрузка чая...</h2>';

  try {
    const response = await instance.get('/teas?perPage=22');
    const teasData = response.data.data.data;

    const cardsHtml = teasData
      .map(data => {
        const card = new TeaCard(data);
        return card.createMarkup();
      })
      .join('');

    app.innerHTML = `
      <div class="container">
        <h1>Admin Tea List</h1>
        <div class="tea-grid">
          ${cardsHtml}
        </div>
      </div>
    `;

    // Инициализация иконок Lucide после рендеринга HTML
    createIcons({ icons: { Pencil, Trash2, Package, CircleDollarSign } });
  } catch (error) {
    app.innerHTML = '<h2>Ошибка загрузки!</h2>';
    console.error(error);
  }
}

renderApp();
