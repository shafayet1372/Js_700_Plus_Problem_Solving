/* 25% Discount on the Most Expensive Item
You want to introduce a discount for your online store. Every customer gets a 25% discount on the most expensive item in the shopping cart.
 The discount will be calculated on just one item, even if the customer buys more than one of the most expensive item.

Create a function that takes an object and returns the total price after discount.

Examples
twentyFiveOnOne([
  { name: "Iphone 20x", quantity: 1, price: 1350 },
  { name: "Samsung x30", quantity: 1, price: 1225 },
  { name: "Nokia 9250", quantity: 1, price: 800 },
  { name: "Tesla Model Y", quantity: 1, price: 72999 }
]) ➞ 58124.25

twentyFiveOnOne([
  { name: "jogging pants", quantity: 1, price: 29.99 },
  { name: "tennis socks", quantity: 2, price: 5.99 },
  { name: "sweat shirt", quantity: 1, price: 59.99 }
]) ➞ 86.96
Notes
The total returned price is calculated upon two decimal
 */

function twentyFiveOnOne(cart) {
  let exp = cart.sort((a, b) => b.price - a.price)[0].price

  let result = cart.reduce((acc, val) => {
    return acc + (val.price * val.quantity)
  }, 0)

  return Math.round(((result - ((exp / 100) * 25)) * 100)) / 100
}

console.log(twentyFiveOnOne([
  { name: "jogging pants", quantity: 1, price: 29.99 },
  { name: "tennis socks", quantity: 2, price: 5.99 },
  { name: "sweat shirt", quantity: 1, price: 59.99 }
]))
console.log(14.9975.toFixed(2))