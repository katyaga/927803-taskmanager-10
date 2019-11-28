import {createSiteMenuTemplate} from "./components/menu";
import {createFilterTemplate} from "./components/filter";
import {createBoardTemplate} from "./components/board";
import {createTaskTemplate} from "./components/task";
import {createTaskEditTemplate} from "./components/task-edit";
import {createLoadMoreButtonTemplate} from "./components/load-more-button";

const TASK_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const taskListElement = document.querySelector(`.board__tasks`);
render(taskListElement, createTaskEditTemplate(), `beforeend`);

new Array(TASK_COUNT).fill(``).forEach(
    () => render(taskListElement, createTaskTemplate(), `beforeend`)
);

const boardElement = document.querySelector(`.board`);
render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);
