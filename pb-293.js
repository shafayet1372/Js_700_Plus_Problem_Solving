/* Sort Authors Last Names Alphabetically
Today you volunteered as a librarian. You were given an array of objects, each one containing different book information. You need to 
sort the objects in alphabetical order of the author's last name.

Examples
sortByLastName([
  { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
]) ➞ [
  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
]
Notes
There will always be a name, rating, and author property on each object.
The array will never be empty.
The author property will always feature only a first and last name */





function sortByLastName(books) {
	return books.sort((a, b) => {
        let a1=a.author.split(' ')
        let b1=b.author.split(' ')
        a1=a1[a1.length-1]
        b1=b1[b1.length-1]
       
        if (a1.charCodeAt(0) == b1.charCodeAt(0)) {
    
            let index
            for (let i = 0; i < a1.length; i++) {
    
                if (a1.charCodeAt(i) != b1.charCodeAt(i)) {
                    index = i
                    break;
                }
            }
    
            a1 = a1.charCodeAt(index)
            b1 = b1.charCodeAt(index)
        } else {
            a1 = a1.charCodeAt(0)
            b1 = b1.charCodeAt(0)
        }
        return a1 - b1
    })
}

console.log(sortByLastName([
    { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
    { name: "Warcross", rating: "13+", author: "Marie Lu" },
    { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
  ]))