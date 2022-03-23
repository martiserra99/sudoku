import { Sudoku } from "./sudoku/sudoku.js";

export class Model {
  constructor() {
    this.sudoku = new Sudoku(this);
  }
}
