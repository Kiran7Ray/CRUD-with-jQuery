function getLocalStorage() {
  var list = localStorage.getItem("grocery-list");
  return list ? JSON.parse(list) : [];
}

function setLocalStorage(itemsArray) {
  localStorage.setItem("grocery-list", JSON.stringify(itemsArray));
}

var items = getLocalStorage();
var editId = null;

function render() {
  var $app = $("#app").empty();
  var itemToEdit = editId ? $.grep(items, (i) => i.id === editId)[0] : null;
  $app.append(createForm(editId, itemToEdit));
  $app.append(createItems(items));
}

function addItem(name) {
  items.push({ id: new Date().getTime().toString(), name, completed: false });
  syncAndRender();
}

function removeItem(id) {
  items = $.grep(items, (item) => item.id !== id);
  syncAndRender();
}

function syncAndRender() {
  setLocalStorage(items);
  render();
}

$(document).ready(render);
