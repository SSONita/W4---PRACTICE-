function calculateTotalPrice(shoppingCart){
  let totalPrice = 0;
  for (let item of shoppingCart) {
    totalPrice += item.price * item.quantity;
  }
  return totalPrice;
}
console.log("Total price:", calculateTotalPrice(shoppingCart));