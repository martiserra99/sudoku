import canvasUI from "../../../../canvas-user-interface/index.esm.js";

export const setupCreateLifecycleFunctions = function (sudoku) {
  sudoku.lifecycle.set("getElement", function (sudoku) {
    return sudoku.inner.call("buildGrid");
  });

  sudoku.inner.fun("buildGrid", function (sudoku) {
    const grid = canvasUI.layout.new("grid", "grid");
    grid.set("dimensions", {
      rows: [{ count: 3, unit: "fr", value: 1 }],
      columns: [{ count: 3, unit: "fr", value: 1 }],
    });
    grid.set("gap", {
      size: { horizontal: 3, vertical: 3 },
      color: "rgba(0,0,0,0)",
    });

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const square = sudoku.inner.call("buildSquare", { column: i, row: j });
        sudoku.inner.call("insertSquare", grid, square, { column: i, row: j });
      }
    }

    return grid;
  });

  sudoku.inner.fun("buildSquare", function (sudoku, position) {
    const { column, row } = position;
    const id = `square-${column},${row}`;
    const square = canvasUI.layout.new(id, "grid");
    square.set("dimensions", {
      rows: [{ count: 3, unit: "fr", value: 1 }],
      columns: [{ count: 3, unit: "fr", value: 1 }],
    });
    square.set("gap", {
      size: { horizontal: 1, vertical: 1 },
      color: "rgba(0,0,0,0)",
    });

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const cell = sudoku.inner.call("buildCell", {
          column: column * 3 + i,
          row: row * 3 + j,
        });
        sudoku.inner.call("insertCell", square, cell, { column: i, row: j });
      }
    }

    return square;
  });

  sudoku.inner.fun("buildCell", function (sudoku, position) {
    const { column, row } = position;

    const id = `cell-${column},${row}`;
    const cell = canvasUI.composite.new(id, "textArea");
    cell.set("size", {
      width: { unit: "%", value: 100 },
      height: { unit: "%", value: 100 },
    });
    cell.set("align", { horizontal: "middle", vertical: "middle" });
    cell.set("text", "");
    cell.custom.set("position", { column, row });
    cell.listeners.add("click", function (cell) {
      const position = cell.custom.get("position");
      sudoku.signal({ type: "cellClick", data: position, propagate: false });
    });

    return cell;
  });

  sudoku.inner.fun("insertCell", function (sudoku, square, cell, position) {
    square.insert(cell);
    cell.layoutParams.set("position", position);
  });

  sudoku.inner.fun("insertSquare", function (sudoku, grid, square, position) {
    grid.insert(square);
    square.layoutParams.set("position", position);
  });
};
