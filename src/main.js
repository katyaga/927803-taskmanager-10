import BoardComponent from './components/board.js';
import FilterController from './controllers/filter.js';
import SiteMenuComponent, {MenuItem} from './components/menu.js';
import TasksModel from './models/tasks.js';
import BoardController from './controllers/board.js';
import StatisticsComponent from './components/statistics.js';
import {generateTasks} from './mock/task.js';
import {render, RenderPosition} from './utils/render.js';

const TASK_COUNT = 22;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);
const siteMenuComponent = new SiteMenuComponent();

// // Быстрое решение для подписки на клик по кнопке.
// // Это противоречит нашей архитектуре работы с DOM-элементами, но это временное решение.
// // Совсем скоро мы создадим полноценный компонент для работы с меню.
// siteMenuComponent.getElement().querySelector(`.control__label--new-task`)
//   .addEventListener(`click`, () => {
//     boardController.createTask();
//   });

render(siteHeaderElement, siteMenuComponent, RenderPosition.BEFOREEND);

const tasks = generateTasks(TASK_COUNT);
const tasksModel = new TasksModel();
tasksModel.setTasks(tasks);

const dateTo = new Date();
const dateFrom = (() => {
  const d = new Date(dateTo);
  d.setDate(d.getDate() - 7);
  return d;
})();

const statisticsComponent = new StatisticsComponent({tasks: tasksModel, dateFrom, dateTo});

const filterController = new FilterController(siteMainElement, tasksModel);
filterController.render();

const boardComponent = new BoardComponent();
render(siteMainElement, boardComponent, RenderPosition.BEFOREEND);
render(siteMainElement, statisticsComponent, RenderPosition.BEFOREEND);

const boardController = new BoardController(boardComponent, tasksModel);

statisticsComponent.hide();
boardController.render();

siteMenuComponent.setOnChange((menuItem) => {
  switch (menuItem) {
    case MenuItem.NEW_TASK:
      siteMenuComponent.setActiveItem(MenuItem.TASKS);
      statisticsComponent.hide();
      boardController.show();
      boardController.createTask();
      break;
    case MenuItem.STATISTICS:
      boardController.hide();
      statisticsComponent.show();
      break;
    case MenuItem.TASKS:
      statisticsComponent.hide();
      boardController.show();
      break;
  }
});
