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
  var $app = $("#app");
  $app.empty();

  var itemToEdit = editId
    ? $.grep(items, function (item) {
        return item.id === editId;
      })[0]
    : null;

  var $formElement = createForm(editId, itemToEdit);
  var $itemsElement = createItems(items);

  $app.append($formElement);
  $app.append($itemsElement);
}

function syncAndRender() {
  setLocalStorage(items);
  render();
}

function addItem(itemName) {
  var newItem = {
    name: itemName,
    completed: false,
    id: new Date().getTime().toString(),
  };
  items.push(newItem);
  syncAndRender();

  setTimeout(function () {
    alert("Item Added Successfully!");
  }, 0);
}

function editCompleted(itemId) {
  items = $.map(items, function (item) {
    if (item.id === itemId) {
      return $.extend({}, item, { completed: !item.completed });
    }
    return item;
  });
  syncAndRender();
}

function updateItemName(newName) {
  items = $.map(items, function (item) {
    if (item.id === editId) {
      return $.extend({}, item, { name: newName });
    }
    return item;
  });
  editId = null;
  syncAndRender();

  setTimeout(function () {
    alert("Item Updated Successfully!");
  }, 0);
}

function removeItem(itemId) {
  items = $.grep(items, function (item) {
    return item.id !== itemId;
  });
  syncAndRender();

  setTimeout(function () {
    alert("Item Deleted Successfully!");
  }, 0);
}

function setEditId(itemId) {
  editId = itemId;
  render();

  setTimeout(function () {
    $(".form-input").focus();
  }, 0);
}

$(document).ready(function () {
  render();
});
