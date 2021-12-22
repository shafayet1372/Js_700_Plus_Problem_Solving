/* The Million Dollar Fence
Your task is to create a fence worth $1 million. You are given the price of the material (per character), meaning the length of the fence 
will change depending on the cost of the material.

Create a function which constructs this pricey pricey fence, using the letter "H" to build.

constructFence("$50,000") ➞ "HHHHHHHHHHHHHHHHHHHHHHHHHHHH"
// 20 fence posts were set up ($1,000,000 / $50,000 = 20)
Examples
constructFence("$50,000") ➞ "HHHHHHHHHHHHHHHHHHHHHHHHHHHH"

constructFence("$100,000") ➞ "HHHHHHHHHH"

constructFence("$1,000,000") ➞ "H" */


function constructFence(price) {

  let len = 1000000 / parseInt(price.split(/[\$,]/).join(""))
  return "H".repeat(len)
}

console.log(constructFence("$50,000"))