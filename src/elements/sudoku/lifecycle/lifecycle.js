import { setupCreateLifecycleFunctions } from "./states/create.js";
import { setupStartLifecycleFunctions } from "./states/start.js";

export const setupLifecycleFunctions = function (sudoku) {
  setupCreateLifecycleFunctions(sudoku);
  setupStartLifecycleFunctions(sudoku);
};
