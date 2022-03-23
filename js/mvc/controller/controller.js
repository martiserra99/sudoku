import { Buttons } from "./buttons/buttons.js";
import { Sudoku } from "./sudoku/sudoku.js";

export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.sudoku = new Sudoku(this);
    this.buttons = new Buttons(this);
    this._bind();
  }

  _bind() {
    this._bindViewEvents();
  }

  _bindViewEvents() {
    this._bindClick();
  }

  _bindClick() {
    this.view.handlerClick(() => {
      this.model.sudoku.unselectCell();
    });
  }
}
