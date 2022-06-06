import { init } from "..";
import { editItemId, listStorageKey } from "./constants";

export function getItemByDataAttribute(selector) {
  return document.querySelector(`[data-selector="${selector}"]`);
}

export function getList() {
  return JSON.parse(localStorage.getItem(listStorageKey)) || [];
}

export function setList(list) {
  localStorage.setItem(listStorageKey, JSON.stringify(list));
}

export function getEditID() {
  return JSON.parse(localStorage.getItem(editItemId));
}

export function setEditItemID(id) {
  localStorage.setItem(editItemId, JSON.stringify(id));
}

export function submitNewTodo(title, inputDOM) {
  const newDate = new Date();

  if (!title) {
    alert("Add text before create new todo item please!");

    return;
  }

  const newItem = {
    id: newDate.valueOf(),
    title,
    isCompleted: false,
    createdAt: newDate,
  };

  const storageList = getList();

  storageList.push(newItem);

  setList(storageList);

  inputDOM.value = "";

  init();
}

export function editExistingTodo(item, title) {
  const newDate = new Date();

  if (!title) {
    alert("Add text before create new todo item please!");

    return;
  }

  const storageList = getList();

  const currentToDo = storageList.findIndex((el) => el.id === item.id);

  storageList[currentToDo].title = title;
  storageList[currentToDo].createdAt = new Date();

  setList(storageList);

  setEditItemID(null);

  init();
}
