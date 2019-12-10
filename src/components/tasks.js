import {createElement} from '../utils.js';

export default class Tasks {
  constructor() {
    this._element = null;
  }

  _createTasksTemplate() {
    return (
      `<div class="board__tasks"></div>`
    );
  }

  getTemplate() {
    return this._createTasksTemplate();
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
