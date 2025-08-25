export const setupEvents = function (sudoku) {
  sudoku.events.set("cellClick", function (sudoku, signal, state) {
    if (signal.type !== "cellClick") return { event: false };
    return { event: true, data: signal.data };
  });

  sudoku.events.set("numberClick", function (sudoku, signal, state) {
    if (signal.type !== "keyup") return { event: false };
    const key = signal.data;
    if (isNaN(key)) return { event: false };
    const num = +key;
    if (num < 1 || num > 9) return { event: false };
    return { event: true, data: num };
  });

  sudoku.events.set("backspaceClick", function (sudoku, signal, state) {
    if (signal.type !== "keyup" || signal.data !== "Backspace")
      return { event: false };
    return { event: true };
  });
};
