function createSingleItem(item) {
  var $div = $('<div class="single-item"></div>');
  $div.html(`
        <input type="checkbox" ${item.completed ? "checked" : ""} />
        <p style="text-decoration: ${item.completed ? "line-through" : "none"}">${item.name}</p>
        <button class="btn edit-btn"><i class="fa-regular fa-pen-to-square"></i></button>
        <button class="btn remove-btn"><i class="fa-regular fa-trash-can"></i></button>
    `);

  $div
    .find('input[type="checkbox"]')
    .on("change", () => editCompleted(item.id));

  $div.find(".remove-btn").on("click", () => removeItem(item.id));

  $div.find(".edit-btn").on("click", () => setEditId(item.id));

  return $div;
}
