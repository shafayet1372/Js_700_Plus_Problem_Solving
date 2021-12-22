// Write a sorting function that takes in an array of names and sorts them by last name either alphabetically (ASC) or reverse-alphabetically (DESC).

// Examples
// sortContacts([
//   "John Locke",
//   "Thomas Aquinas",
//   "David Hume",
//   "Rene Descartes"
// ], "ASC") ➞ [
//   "Thomas Aquinas",
//   "Rene Descartes",
//   "David Hume",
//   "John Locke"
// ]

// // Aquinas (A) < Descartes (D) < Hume (H) < Locke (L)

// sortContacts([
//   "Paul Erdos",
//   "Leonhard Euler",
//   "Carl Gauss"
// ], "DESC") ➞ [
//   "Carl Gauss",
//   "Leonhard Euler",
//   "Paul Erdos"
// ]

// // Gauss (G) > Erdos (ER) > Euler (EU)

// sortContacts([], "DESC") ➞ []

// sortContacts(null, "DESC") ➞ []

// sortContacts(undefined, "DESC") ➞ []





function sortContacts(names, sort) {
	
if(!names){
  return []
}else{
  return  names.sort(function(a, b) {
    var nameA = a.split(" ")[1].toUpperCase(); 
    var nameB = b.split(" ")[1].toUpperCase();
   if(sort=="ASC"){
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
   }else{
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }
   }
  
   
    return 0;
  });
}

}
console.log(sortContacts([
  "John Locke",
  "Thomas Aquinas",
  "David Hume",
  "Rene Descartes"
], "ASC", "ASC"))