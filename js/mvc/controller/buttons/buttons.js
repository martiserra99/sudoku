export class Buttons {
  constructor(controller) {
    this._controller = controller;
    this.model = controller.model;
    this.view = controller.view;
    this._bind();
  }

  _bind() {
    this._bindViewEvents();
  }

  _bindViewEvents() {
    this._bindClickGenerate();
  }

  _bindClickGenerate() {
    this.view.buttons.handlerClickGenerate(() => {
      this._controller.sudoku.generate();
    });
  }
}
