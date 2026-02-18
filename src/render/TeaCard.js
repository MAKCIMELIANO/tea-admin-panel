import _ from 'lodash';
import s from './TeaCard.module.css';

export class TeaCard {
  constructor(teaData) {
    this.id = teaData._id;
    this.name = teaData.teaName;
    this.category = _.capitalize(teaData.category);
    this.stock = teaData.teaStockInGrams;
    this.price = _.round(teaData.salePriceInUkrainePerGramInDollars, 2);
    this.description = _.truncate(teaData.description, {
      length: 60,
      separator: ' ',
    });
  }

  createMarkup() {
    return `
      <div class="${s.card}" data-id="${this.id}">
        <div class="${s.badge}">${this.category}</div>
        <h3 class="${s.title}">${this.name}</h3>
        <p class="${s.desc}">${this.description}</p>
        
        <div class="${s.info}">
          <div class="${s.row}">
            <span><i data-lucide="package" class="${s.icon}"></i> Запас:</span> 
            <b>${this.stock}г</b>
          </div>
          <div class="${s.row}">
            <span><i data-lucide="circle-dollar-sign" class="${s.icon}"></i> Цена:</span> 
            <b>$${this.price}/г</b>
          </div>
        </div>

        <div class="${s.actions}">
          <button class="${s.btnEdit}">
            <i data-lucide="pencil" class="${s.btnIcon}"></i> Редактировать
          </button>
          <button class="${s.btnDelete}" onclick="window.deleteTea('${this.id}')">
            <i data-lucide="trash-2" class="${s.btnIcon}"></i> Удалить
          </button>
        </div>
      </div>
    `;
  }
}
