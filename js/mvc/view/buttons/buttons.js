export class Buttons {
  constructor(view) {
    this._view = view;
    this._buttons = view.rootElement.find("buttons");
    this._generate = this._buttons.find("buttonGenerate");
  }

  handlerClickGenerate(handler) {
    this._generate.listeners.add("click", function (buttons, event) {
      handler(event.cell);
    });
  }
}
