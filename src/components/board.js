import {createElement} from '../utils.js';

export default class Board {
  constructor() {
    this._element = null;
  }

  _createBoardTemplate() {
    return (
      `<section class="board container">
      </section>`
    );
  }

  getTemplate() {
    return this._createBoardTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
