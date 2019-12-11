import AbstractComponent from './abstract-component.js';

export default class Tasks extends AbstractComponent {
  _createTasksTemplate() {
    return (
      `<div class="board__tasks"></div>`
    );
  }

  getTemplate() {
    return this._createTasksTemplate();
  }
}
