import { canvasUI } from "../../canvas-ui/canvas-ui.js";
import { config } from "../../config.js";
import { Buttons } from "./buttons/buttons.js";
import { Sudoku } from "./sudoku/sudoku.js";

export class View {
  constructor(selector) {
    this.ui = canvasUI.ui.new(selector);

    this._buildUI();
    this.ui.start(this.rootElement);

    this.sudoku = new Sudoku(this);
    this.buttons = new Buttons(this);
  }

  handlerClick(handler) {
    this.rootElement.listeners.add("click", function (sudoku, event) {
      handler();
    });
  }

  _buildUI() {
    this.rootElement = this._buildRoot();
    this.sudokuElement = this._buildSudoku();
    this._insertSudoku(this.rootElement, this.sudokuElement);
    this.buttonsElement = this._buildButtons();
    this._insertButtons(this.rootElement, this.buttonsElement);
    this.instructionsElement = this._buildInstructions();
    this._insertInstructions(this.rootElement, this.instructionsElement);
  }

  _buildRoot() {
    return canvasUI.layout.new("root", "relative");
  }

  _buildSudoku() {
    const sudoku = canvasUI.composite.new("sudoku", "sudoku");
    sudoku.set("size", config.styles.sudoku.size);
    sudoku.set("font", config.styles.sudoku.font);
    sudoku.set("lines", config.styles.sudoku.lines);
    return sudoku;
  }

  _insertSudoku(root, sudoku) {
    root.insert(sudoku);
    sudoku.layoutParams.set("attachTo", {
      left: "parent",
      right: "parent",
      top: "parent",
      bottom: "parent",
    });
  }

  _buildButtons() {
    const buttons = canvasUI.layout.new("buttons", "linear");
    buttons.set("size", {
      width: { unit: "px", value: config.styles.sudoku.size },
      height: "auto",
    });
    buttons.set("direction", "vertical");
    buttons.set("gap", 20);
    const buttonGenerate = this._buildButton("buttonGenerate", "Generate");
    buttons.insert(buttonGenerate);
    return buttons;
  }

  _buildButton(id, text) {
    const button = canvasUI.composite.new(id, "textArea");
    this._setButtonProperties(button, text);
    this._setButtonEffect(button);
    return button;
  }

  _setButtonProperties(button, text) {
    button.set("size", {
      width: { unit: "%", value: 100 },
      height: { unit: "px", value: 50 },
    });
    button.set("text", text);
    button.set("font", config.styles.button.font);
    button.set("color", config.styles.button.color);
    button.set("background", config.styles.button.background);
    button.set("border", config.styles.button.border);
    button.set("corner", config.styles.button.corner);
  }

  _setButtonEffect(button) {
    button.listeners.add("mousedown", function () {
      button.set("background", config.styles.button.mousedown.background);
    });
    this.rootElement.listeners.add("mouseup", function () {
      button.set("background", config.styles.button.background);
    });
  }

  _insertButtons(root, buttons) {
    root.insert(buttons);
    buttons.layoutParams.set("attachTo", {
      top: root.find("sudoku"),
      bottom: null,
      left: "parent",
      right: "parent",
    });
    buttons.layoutParams.get("margin").top = 20;
  }

  _buildInstructions() {
    const instructions = canvasUI.layout.new("instructions", "linear");
    instructions.set("size", { width: "auto", height: "auto" });
    instructions.set("direction", "vertical");
    instructions.set("gap", 20);
    const insturction1 = this._buildInstruction(
      "instruction-1",
      "Select the cells and press the keys to add the numbers."
    );
    instructions.insert(insturction1);
    const insturction2 = this._buildInstruction(
      "instruction-2",
      "Press backspace to remove the numbers."
    );
    instructions.insert(insturction2);
    return instructions;
  }

  _buildInstruction(id, text) {
    const instruction = canvasUI.view.new(id, "text");
    instruction.set("text", text);
    instruction.set("font", config.styles.text.font);
    instruction.set("color", config.styles.text.color);
    return instruction;
  }

  _insertInstructions(root, instructions) {
    root.insert(instructions);
    instructions.layoutParams.set("attachTo", {
      top: root.find("buttons"),
      right: "parent",
      left: "parent",
      bottom: null,
    });
    instructions.layoutParams.get("margin").top = 30;
  }
}
