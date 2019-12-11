import AbstractComponent from './abstract-component.js';

export default class Board extends AbstractComponent {
  _createBoardTemplate() {
    return (
      `<section class="board container">
      </section>`
    );
  }

  getTemplate() {
    return this._createBoardTemplate();
  }
}
