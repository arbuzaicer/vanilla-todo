import renderSingleItem from "./components/single/todoItem";
import "./styles/styles.css";
import {
  getItemByDataAttribute,
  getList,
  setEditItemID,
  submitNewTodo,
} from "./utils/functions";

// variables

const input = getItemByDataAttribute("main-input");
const submitBtn = document.getElementById("submit-btn");
const todoContainer = document.querySelector(".to-do");

let inputValue = "";

// listeners

input.addEventListener("input", (e) => {
  inputValue = e.target.value;
});

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    submitNewTodo(inputValue, input);
  }
});

submitBtn.addEventListener("click", () => {
  submitNewTodo(inputValue, input);
});

// functions

export function init() {
  const todoList = getList();

  if (todoList) {
    renderList(todoList);
  }
}

function renderList(data) {
  todoContainer.innerHTML = "";

  data.forEach((item) => {
    renderSingleItem(item);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  setEditItemID(null);
  init();
});
