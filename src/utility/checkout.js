export var calculateTotal = (cart) => {
  var total = 0;
  for (var { cost, quantity } of cart) total += cost * quantity;
  return total;
};
