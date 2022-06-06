import { onCheckboxPress, onDeletePress } from "./helpers/functions";
import { todoContainer } from "../../utils/DOMselectors";
import { editExistingTodo } from "../../utils/functions";

let inputValue = "";

export function renderEditView(item) {
  const container = document.createElement("div");
  container.classList.add("list-item");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = item.isCompleted;

  checkbox.addEventListener("input", () => {
    onCheckboxPress(item);
  });

  const input = document.createElement("input");
  input.type = "text";
  input.classList.add("main-input");
  input.classList.add("edit-input");
  input.value = item.title;
  input.addEventListener("input", (e) => {
    inputValue = e.target.value;
  });

  input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      editExistingTodo(item, inputValue);
    }
  });

  const actions = document.createElement("div");
  actions.classList.add("list-item-actions");

  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fas");
  deleteIcon.classList.add("fa-trash-alt");
  deleteIcon.classList.add("list-icon");

  deleteIcon.addEventListener("click", () => {
    onDeletePress(item);
  });

  const updateIcon = document.createElement("i");
  updateIcon.classList.add("fa-solid");
  updateIcon.classList.add("fa-location-arrow");
  updateIcon.classList.add("list-icon");

  updateIcon.addEventListener("click", () => {
    editExistingTodo(item, inputValue);
  });

  actions.append(deleteIcon);
  actions.append(updateIcon);

  container.append(checkbox);
  container.append(input);
  container.append(actions);

  todoContainer.append(container);
}
