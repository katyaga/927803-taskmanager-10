import AbstractComponent from './abstract-component.js';

export default class Sort extends AbstractComponent {
  _createSortTemplate() {
    return (
      `<div class="board__filter-list">
      <a href="#" class="board__filter">SORT BY DEFAULT</a>
      <a href="#" class="board__filter">SORT BY DATE up</a>
      <a href="#" class="board__filter">SORT BY DATE down</a>
    </div>`
    );
  }

  getTemplate() {
    return this._createSortTemplate();
  }
}
