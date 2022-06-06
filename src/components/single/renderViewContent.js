import { format } from "date-fns";

import {
  onCheckboxPress,
  onDeletePress,
  onEditPress,
} from "./helpers/functions";
import { todoContainer } from "../../utils/DOMselectors";

export function rednerView(item) {
  const container = document.createElement("div");
  container.classList.add("list-item");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = item.isCompleted;

  checkbox.addEventListener("input", () => {
    onCheckboxPress(item);
  });

  const content = document.createElement("div");
  content.classList.add("list-item-content");

  const title = document.createElement("p");
  title.textContent = item.title;

  const dateTitle = document.createElement("p");
  dateTitle.classList.add("item-date");
  dateTitle.textContent = `Created at: ${format(
    new Date(item.createdAt),
    "MMM do, EEEE, yyyy"
  )}`;

  const actions = document.createElement("div");
  actions.classList.add("list-item-actions");

  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fas");
  deleteIcon.classList.add("fa-trash-alt");
  deleteIcon.classList.add("list-icon");

  deleteIcon.addEventListener("click", () => {
    onDeletePress(item);
  });

  const editIcon = document.createElement("i");
  editIcon.classList.add("fas");
  editIcon.classList.add("fa-pencil-alt");
  editIcon.classList.add("list-icon");

  editIcon.addEventListener("click", () => {
    onEditPress(item);
  });

  actions.append(deleteIcon);
  actions.append(editIcon);

  content.append(title);
  content.append(dateTitle);

  container.append(checkbox);
  container.append(content);
  container.append(actions);

  todoContainer.append(container);
}
