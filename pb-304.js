/* Who's in First Place?
Create a function that takes a string road and returns the car that's in first place. The road will be made of "=", and cars will be represented by letters in the alphabet.

Examples
firstPlace("====b===O===e===U=A==") ➞ "A"

firstPlace("e==B=Fe") ➞ "e"

firstPlace("proeNeoOJGnfl") ➞ "l"
Notes
Return "No car available" if there is no car on the road and "No road available" if there is no road. */






function firstPlace(road) {
  let s = road.split("")
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] != '=') {
      return s[i]
    }
  }
}

console.log(firstPlace("====b===O===e===U=A=="))