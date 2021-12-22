/* ext Editor Part 1

We're going to create a text editor similar to Microsoft Word. The editor autosaves so that the user only loses a small amount of data if a crash occurs.

We want to be able to handle as many operations as needed, but they have to be processed in order. There are two basic operations that our editor understands:

    An insert operation contains the text to be inserted and the position to insert it at.
    A delete operation contains the position to delete from and the length of the text to delete.

Write a function that takes a list of operations, either insert or delete, and returns the combined text.
Examples

[Insert("foo", 0), Insert(" bar", 3)] ➞ "foo bar"

[Insert("foo bar", 0), Delete(4, 2)] ➞ "fobar"

Notes

Keep in mind that each operation will have data that assumes the previous operations were already processed. */

function edit(operations) {
  if (!operations.length) {
    return ''
  }
  let result = []
  for (let i = 0; i < operations.length; i++) {
    if (operations[i].operation == 'insert') {
      let val = operations[i].text.split("")
      result.splice(operations[i].position, 0, ...val)
    } else {
      result.splice((operations[i].from - 1) - operations[i].length + 1, operations[i].length)
      
    }


  }
  return result.join("")
}

console.log(edit([
  { operation: "insert", text: "the funk", position: 0 },
  { operation: "insert", text: "I'm ", position: 0 },
  { operation: "delete", from: 7, length: 4 },
  { operation: "insert", text: "y", position: 8 },
  { operation: "insert", text: " from funky town", position: 9 },
  { operation: "insert", text: "a funky monkey ", position: 4 },
  { operation: "delete", from: 11, length: 1 },
  { operation: "delete", from: 17, length: 2 },
  { operation: "delete", from: 21, length: 6 }
]))

