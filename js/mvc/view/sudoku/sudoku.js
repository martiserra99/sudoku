export class Sudoku {
  constructor(view) {
    this._view = view;
    this._sudoku = view.root.find("sudoku");
  }

  set(position, cell) {
    this._sudoku.call("set", position, cell);
  }

  del(position) {
    this._sudoku.call("del", position);
  }

  get(position) {
    return this._sudoku.call("get", position);
  }

  selectCell(position) {
    this._sudoku.call("selectCell", position);
  }

  unselectCell() {
    this._sudoku.call("unselectCell");
  }

  selectedCell() {
    return this._sudoku.call("selectedCell");
  }

  handlerCellClick(handler) {
    this._sudoku.listeners.add("cellClick", function (sudoku, data) {
      handler(data);
    });
  }

  handlerNumberClick(handler) {
    this._sudoku.listeners.add("numberClick", function (sudoku, data) {
      handler(data);
    });
  }

  handlerBackspaceClick(handler) {
    this._sudoku.listeners.add("backspaceClick", function (sudoku, data) {
      handler();
    });
  }
}
