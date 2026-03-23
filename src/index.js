import { formHandler } from "./views/form.js";
import { dom } from "./views/dom.js";

dom.renderApp();
formHandler.showProjectForm();
formHandler.hideProjectForm();
formHandler.submitProjectForm();
formHandler.showTodoForm();
formHandler.hideTodoForm();
formHandler.submitTodoForm();