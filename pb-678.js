/* Words that Start with a Vowel
Write a function that retrieves all words that begin with a vowel.

Examples
retrieve("A simple life is a happy life for me.") ➞ ["a", "is", "a"]

retrieve("Exercising is a healthy way to burn off energy."
➞ ["exercising", "is", "a", "off", "energy"]

retrieve("The poor ostrich was ostracized.")
➞ ["ostrich", "ostracized"]

retrieve("")
➞ []
Notes
Make all words lower case in the output.
Retrieve the words in the order they appear in the sentence.
 */
function retrieve(str) {
  let s = str.toLowerCase().split(/[\.\s+]/)
  console.log(s)
  return s.filter(x => {
    let val = x.split("")[0]
    return  val && /[aeiou]/.test(val)
  })
}
console.log(/[aeiou]/.test(''))
console.log(retrieve("A simple life is a happy life for me."))