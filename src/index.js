import { dom } from "./views/dom.js";
import { cardHandler } from "./views/card.js";
import { controller } from "./controller/controller.js";
import './views/style/base.css';

dom.renderApp();
cardHandler.buttonsGenerator();
controller.generateProject('Main','default');