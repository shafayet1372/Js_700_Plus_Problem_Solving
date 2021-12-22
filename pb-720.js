/* Let's Talk Like a Monkey 🐵
Mubashir can talk with monkeys. You can also learn their simple language.

Create a function that takes a string txt and returns the string in monkeys language. You have to figure out their language from test cases.

Examples
monkeyTalk("Mubashir Hassan") ➞ "Ook ook."

monkeyTalk("Hello") ➞ "Ook."

monkeyTalk("Matt") ➞ "Ook."

monkeyTalk("Everyone") ➞ "Eek."

monkeyTalk("Edabit is Amazing") ➞ "Eek eek eek."
Notes
A hint in the comments section. */


function monkeyTalk(txt) {

  let regVow = /^[aeiou][a-z]+/i

  let s = txt.split(" ").map(x => {
    if (regVow.test(x)) {
   
      return 'eek'
    }
    return 'ook'
  })

  s[0] = s[0].replace(s[0].charAt(0), s[0].charAt(0).toUpperCase())
  return s.join(" ")+"."
}
console.log(monkeyTalk("Edabit is Amazing"))