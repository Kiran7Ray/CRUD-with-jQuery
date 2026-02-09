function createForm(editId, itemToEdit) {
  var $form = $("<form></form>");
  $form.html(`
        <h2>grocery bud</h2>
        <div class="form-control">
            <input type="text" class="form-input" value="${itemToEdit ? itemToEdit.name : ""}" />
            <button type="submit" class="btn">${editId ? "edit" : "submit"}</button>
        </div>
    `);

  $form.on("submit", function (e) {
    e.preventDefault();
    var value = $.trim($form.find(".form-input").val());
    if (!value) return alert("Please provide value");

    editId ? updateItemName(value) : addItem(value);
  });
  return $form;
}
