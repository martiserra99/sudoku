import { newElements } from "./elements/elements.js";
import { Controller } from "./mvc/controller/controller.js";
import { Model } from "./mvc/model/model.js";
import { View } from "./mvc/view/view.js";

newElements();

const app = new Controller(new Model(), new View("#ui"));
