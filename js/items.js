function createItems(itemsArray) {
  var $container = $('<div class="items"></div>');
  $.each(itemsArray, function (index, item) {
    $container.append(createSingleItem(item));
  });
  return $container;
}
