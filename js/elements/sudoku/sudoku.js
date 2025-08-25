import canvasUI from "../../canvas-user-interface/index.esm.js";
import { setupLifecycleFunctions } from "./lifecycle/lifecycle.js";
import { setupFunctions } from "./functions/functions.js";
import { setupEvents } from "./events/events.js";

export const newCompositeSudoku = function () {
  const sudoku = canvasUI.composite.newType("sudoku");

  sudoku.set("size", 450);
  sudoku.set("font", {
    size: 26,
    family: "Courier New",
    color: "#000",
  });
  sudoku.set("lines", { color: "#000", outside: true });
  sudoku.set("background", "rgba(0,0,0,0)");
  sudoku.set("selected", { background: "#ccc" });

  const cells = [];
  for (let i = 0; i < 9; i++) {
    cells.push([]);
    for (let j = 0; j < 9; j++) cells[i].push({ number: null, fixed: false });
  }

  sudoku.inner.set("cells", cells);

  sudoku.inner.set("selectedCell", null);

  setupLifecycleFunctions(sudoku);
  setupFunctions(sudoku);
  setupEvents(sudoku);
};
