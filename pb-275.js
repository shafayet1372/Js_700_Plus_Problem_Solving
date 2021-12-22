/* Got Enough Money?
Create a function that returns any of the items you can afford in the store with the money you have in your wallet. Sort the list in alphabetical order.

Examples
itemsPurchased({
  Water: "$1",
  Bread: "$3",
  TV: "$1,000",
  Fertilizer: "$20"
}, "$300") ➞ ["Bread", "Fertilizer", "Water"]

itemsPurchased({
  Apple: "$4",
  Honey: "$3",
  Fan: "$14",
  Bananas: "$4",
  Pan: "$100",
  Spoon: "$2"
  }, "$100") ➞ ["Apple", "Bananas", "Fan", "Honey", "Pan", "Spoon"]

itemsPurchased({
  Phone: "$999",
  Speakers: "$300",
  Laptop: "$5,000",
  PC: "$1200"},
"$1") ➞ "Nothing"
Notes
Return "Nothing" if you can't afford anything from the store. */





function itemsPurchased(store, wallet) {
  let ar = []
  for (let v in store) {
    ar.push({ ['price']: parseInt(store[v].split(/[,$]/).join("")), ['name']: v })

  }

  ar = ar.filter(val => val.price <= parseInt(wallet.split("$").join("")))
  return ar.length ? ar.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0))
    .map(val => val.name) : "Nothing"
}

console.log(itemsPurchased({ "Phone": "$999", "Speakers": "$300", "Laptop": "$5,000", "PC": "$1200" }, "$1"))