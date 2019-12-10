import AbstractComponent from './abstract-component.js';

export default class NoTasks extends AbstractComponent {
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
}
