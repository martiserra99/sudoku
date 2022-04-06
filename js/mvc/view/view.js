import { canvasUI } from "../../canvas-ui/canvas-ui.js";
import { Buttons } from "./buttons/buttons.js";
import { Sudoku } from "./sudoku/sudoku.js";

export class View {
  constructor(selector) {
    this.ui = canvasUI.ui.new(selector);

    this._buildUI();
    this._adaptUIWithSize();
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
    sudoku.set("size", 450);
    sudoku.get("font").size = 30;
    sudoku.get("font").family = "Raleway, sans-serif";
    sudoku.get("font").color = "#111";
    sudoku.set("lines", { color: "#111", outside: true });
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
      width: { unit: "px", value: 450 },
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
    button.get("font").family = "Raleway, sans-serif";
    button.get("font").weight = 600;
    button.get("font").size = 16;
    button.get("font").color = "#fff";
    button.set("background", "#111");
    button.set("corner", { type: "round", size: 5 });
  }

  _setButtonEffect(button) {
    button.listeners.add("mouseenter", function (button) {
      button.set("background", "#333");
    });
    button.listeners.add("mouseleave", function (button) {
      button.set("background", "#111");
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
    instruction.get("font").family = "Raleway, sans-serif";
    instruction.get("font").weight = 400;
    instruction.get("font").size = 16;
    instruction.get("font").color = "#000";
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

  _adaptUIWithSize() {
    const adaptUI = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (height < 650 || width < 500) {
        this.rootElement.remove(this.buttonsElement);
      } else {
        if (this.rootElement.find("buttons") === null)
          this._insertButtons(this.rootElement, this.buttonsElement);
      }

      if (height < 800 || width < 500) {
        this.rootElement.remove(this.instructionsElement);
      } else {
        if (this.rootElement.find("instructions") === null)
          this._insertInstructions(this.rootElement, this.instructionsElement);
      }

      if (width < 500) {
        this.sudokuElement.set("size", 300);
        this.sudokuElement.get("font").size = 18;
      } else {
        this.sudokuElement.set("size", 450);
        this.sudokuElement.get("font").size = 30;
      }
    };

    setTimeout(() => adaptUI(), 0);
    window.addEventListener("resize", () => adaptUI());
  }
}
