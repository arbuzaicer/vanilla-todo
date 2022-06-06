import { init } from "../../../index";
import {
  getEditID,
  getList,
  setEditItemID,
  setList,
} from "../../../utils/functions";

export function onCheckboxPress(item) {
  const itemsList = getList();

  const currentElement = itemsList.findIndex((el) => el.id === item.id);

  itemsList[currentElement].isCompleted =
    !itemsList[currentElement].isCompleted;

  setList(itemsList);

  init();
}

export function onEditPress(item) {
  setEditItemID(getEditID() === item.id ? null : item.id);

  init();
}

export function onDeletePress(item) {
  const itemsList = getList();

  const filteredList = itemsList.filter((el) => el.id !== item.id);

  setList(filteredList);

  init();
}
