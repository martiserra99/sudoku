export const setupStartLifecycleFunctions = function (sudoku) {
  sudoku.lifecycle.set("updateElement", function (sudoku, grid) {
    sudoku.inner.call("updateGrid", grid);
  });

  sudoku.inner.fun("updateGrid", function (sudoku, grid) {
    const size = sudoku.get("size");
    const lines = sudoku.get("lines");
    const background = sudoku.get("background");
    grid.set("size", {
      width: { unit: "px", value: size },
      height: { unit: "px", value: size },
    });
    grid.get("gap").color = lines.color;
    grid.set("background", background);
    if (lines.outside) grid.set("border", { size: 3, color: lines.color });
    else grid.set("border", { size: 0, color: "rgba(0,0,0,0)" });

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const square = grid.find(`square-${i},${j}`);
        sudoku.inner.call("updateSquare", square);
      }
    }
  });

  sudoku.inner.fun("updateSquare", function (sudoku, square) {
    const lines = sudoku.get("lines");
    square.get("gap").color = lines.color;
    const { column, row } = square.layoutParams.get("position");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const id = `cell-${column * 3 + i},${row * 3 + j}`;
        const cell = square.find(id);
        sudoku.inner.call("updateCell", cell);
      }
    }
  });

  sudoku.inner.fun("updateCell", function (sudoku, cell) {
    const cells = sudoku.inner.get("cells");
    const selectedCell = sudoku.inner.get("selectedCell");

    const { column, row } = cell.custom.get("position");

    const font = sudoku.get("font");
    const lines = sudoku.get("lines");

    cell.get("font").family = font.family;
    cell.get("font").size = font.size;
    cell.set("color", font.color);

    const { number, fixed } = cells[column][row];

    if (number !== null) cell.set("text", `${number}`);
    else cell.set("text", "");

    if (fixed) cell.get("font").weight = 700;
    else cell.get("font").weight = 400;

    const selected =
      selectedCell !== null &&
      column === selectedCell.column &&
      row === selectedCell.row;

    if (selected) cell.set("border", { size: 3, color: lines.color });
    else cell.set("border", { size: 0, color: "rgba(0,0,0,0)" });
  });
};
