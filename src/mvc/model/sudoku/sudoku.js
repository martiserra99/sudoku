export class Sudoku {
  constructor(model) {
    this._model = model;
    this._cells = this._buildCells();
    this._selectedCell = null;
  }

  _buildCells() {
    const cells = [];
    for (let i = 0; i < 9; i++) {
      cells.push([]);
      for (let j = 0; j < 9; j++) cells[i].push({ number: null, fixed: false });
    }
    return cells;
  }

  set(position, cell) {
    const { column, row } = position;
    this._cells[column][row] = cell;
    this._onSet(position, cell);
  }

  del(position) {
    const { column, row } = position;
    this._cells[column][row] = { number: null, fixed: false };
    this._onDel(position);
  }

  get(position) {
    const { column, row } = position;
    return this._cells[column][row];
  }

  selectCell(position) {
    this._selectedCell = position;
    this._onSelectCell(position);
  }

  unselectCell() {
    this._selectedCell = null;
    this._onUnselectCell();
  }

  selectedCell() {
    return this._selectedCell;
  }

  validNumber(position, number) {
    for (let row = 0; row < 9; row++) {
      if (position.row === row) continue;
      const column = position.column;
      if (this.get({ row, column }).number === number) return false;
    }

    for (let column = 0; column < 9; column++) {
      if (position.column === column) continue;
      const row = position.row;
      if (this.get({ row, column }).number === number) return false;
    }

    const grid = {
      row: Math.floor(position.row / 3),
      column: Math.floor(position.column / 3),
    };

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const row = i + grid.row * 3;
        const column = j + grid.column * 3;
        if (row === position.row && column === position.column) continue;
        if (this.get({ row, column }).number === number) return false;
      }
    }

    return true;
  }

  handlerSet(handler) {
    this._onSet = handler;
  }

  handlerDel(handler) {
    this._onDel = handler;
  }

  handlerSelectCell(handler) {
    this._onSelectCell = handler;
  }

  handlerUnselectCell(handler) {
    this._onUnselectCell = handler;
  }
}
