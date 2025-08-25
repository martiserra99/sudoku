import { getSudoku } from "./utils/utils.js";

export class Sudoku {
  constructor(controller) {
    this._controller = controller;
    this.model = controller.model;
    this.view = controller.view;
    this._bind();
    this._init();
  }

  _init() {
    this.generate();
  }

  _bind() {
    this._bindViewEvents();
    this._bindDataChanges();
  }

  _bindViewEvents() {
    this._bindCellClick();
    this._bindNumberClick();
    this._bindBackspaceClick();
  }

  _bindCellClick() {
    this.view.sudoku.handlerCellClick((position) => {
      const { number, fixed } = this.model.sudoku.get(position);
      const canSelect = number === null || !fixed;
      if (canSelect) this.model.sudoku.selectCell(position);
    });
  }

  _bindNumberClick() {
    this.view.sudoku.handlerNumberClick((number) => {
      const position = this.model.sudoku.selectedCell();
      if (position === null) return;
      if (!this.model.sudoku.validNumber(position, number)) return;
      this.model.sudoku.set(position, { number, fixed: false });
    });
  }

  _bindBackspaceClick() {
    this.view.sudoku.handlerBackspaceClick(() => {
      const position = this.model.sudoku.selectedCell();
      if (position !== null) this.model.sudoku.del(position);
    });
  }

  _bindDataChanges() {
    this._bindSet();
    this._bindDel();
    this._bindSelectCell();
    this._bindUnselectCell();
  }

  _bindSet() {
    this.model.sudoku.handlerSet((position, cell) => {
      this.view.sudoku.set(position, cell);
    });
  }

  _bindDel() {
    this.model.sudoku.handlerDel((position) => {
      this.view.sudoku.del(position);
    });
  }

  _bindSelectCell() {
    this.model.sudoku.handlerSelectCell((position) =>
      this.view.sudoku.selectCell(position)
    );
  }

  _bindUnselectCell() {
    this.model.sudoku.handlerUnselectCell(() =>
      this.view.sudoku.unselectCell()
    );
  }

  generate() {
    const sudoku = getSudoku();
    for (let column = 0; column < 9; column++) {
      for (let row = 0; row < 9; row++) {
        const position = { column, row };
        const number = sudoku[row][column];
        if (number > 0)
          this.model.sudoku.set(position, { number, fixed: true });
        else this.model.sudoku.del(position);
      }
    }
  }
}
