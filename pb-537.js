/* Shopping for Memorial Day!
Create a function that takes an array of objects and calculate the total based on the quantity of items purchased. Apply a 6% 
sales tax for each item when appropriate.

Examples
checkout([
  { desc: "potato chips", prc: 2, qty: 2, taxable: false },
  { desc: "soda", prc: 3, qty: 2, taxable: false },
  { desc: "paper plates", prc: 5, qty: 1, taxable: true }
]) ➞ 15.3
Notes
N/A */

function checkout(cart) {
  let tax = 0.06
  return cart.reduce((acc, val) => {
    if (val.taxable) {
      let totalWithTax = (val.prc * val.qty) * tax

      acc += totalWithTax + (val.prc * val.qty)

    } else {
      acc += val.prc * val.qty
    }
    return acc
  }, 0)
}

console.log(checkout([
  { desc: "beach umbrella", prc: 58, qty: 1, taxable: true },
  { desc: "beach towel", prc: 9, qty: 2, taxable: true },
  { desc: "swim suit", prc: 25, qty: 2, taxable: false },
  { desc: "soda", prc: 3, qty: 2, taxable: false },
  { desc: "cooler", prc: 25, qty: 1, taxable: true },
]))