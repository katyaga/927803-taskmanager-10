import {createElement} from '../utils.js';

export default class NoTasks {
  constructor() {
    this._element = null;
  }

  _createNoTasksTemplate() {
    return (
      `<p class="board__no-tasks">
      Click «ADD NEW TASK» in menu to create your first task
    </p>`
    );
  }

  getTemplate() {
    return this._createNoTasksTemplate();
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
