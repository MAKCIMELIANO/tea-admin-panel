export const renderTeaTable = teas => {
  const container = document.querySelector('#tea-list');

  if (!teas || teas.length === 0) {
    container.innerHTML = '<p>Чай не найден.</p>';
    return;
  }

  const tableHtml = `
    <table class="tea-table">
      <thead>
        <tr>
          <th>Название</th>
          <th>Категория</th>
          <th>Описание</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        ${teas
          .map(
            tea => `
          <tr data-id="${tea._id}">
            <td>${tea.teaName}</td>
            <td><span class="category-badge">${tea.category}</span></td>
            <td>${tea.description.slice(0, 50)}...</td>
            <td>
              <button class="btn-edit">✏️</button>
              <button class="btn-delete" onclick="window.deleteTea('${tea._id}')">🗑️</button>
            </td>
          </tr>
        `,
          )
          .join('')}
      </tbody>
    </table>
  `;

  container.innerHTML = tableHtml;
};
