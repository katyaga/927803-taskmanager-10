import AbstractComponent from "./abstract-component";

export default class LoadMoreButton extends AbstractComponent {
  _createLoadMoreButtonTemplate() {
    return (
      `<button class="load-more" type="button">load more</button>`
    );
  }

  getTemplate() {
    return this._createLoadMoreButtonTemplate();
  }

  setClickHandler(handler) {
    this.getElement().addEventListener(`click`, handler);
  }
}
