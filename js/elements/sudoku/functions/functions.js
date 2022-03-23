export const setupFunctions = function (sudoku) {
  sudoku.fun("set", function (sudoku, position, cell) {
    const { column, row } = position;
    const cells = sudoku.inner.get("cells");
    cells[column][row] = cell;
  });

  sudoku.fun("del", function (sudoku, position) {
    const { column, row } = position;
    const cells = sudoku.inner.get("cells");
    cells[column][row] = { number: null, fixed: false };
  });

  sudoku.fun("get", function (sudoku, position) {
    const { column, row } = position;
    const cells = sudoku.inner.get("cells");
    return cells[column][row];
  });

  sudoku.fun("selectCell", function (sudoku, position) {
    sudoku.inner.set("selectedCell", position);
  });

  sudoku.fun("unselectCell", function (sudoku) {
    sudoku.inner.set("selectedCell", null);
  });

  sudoku.fun("selectedCell", function (sudoku) {
    return sudoku.inner.get("selectedCell");
  });
};
