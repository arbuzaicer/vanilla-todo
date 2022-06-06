import { getEditID } from "../../utils/functions";
import { renderEditView } from "./renderEditContent";
import { rednerView } from "./renderViewContent";
import "./single.css";

function renderSingleItem(item) {
  if (getEditID() === item.id) {
    renderEditView(item);
    return;
  }

  rednerView(item);
}

export default renderSingleItem;
