/* The Most Brilliant Exciting Fantastic Number

Given a number n, return a sentence which describes the number in the following ways.

    Always start the string with "The most ".
    If n is evenly divisible by 1, add "brilliant " to the sentence.
    If n is evenly divisble by 2, add "exciting " to the sentence.
    ... 3, add "fantastic " to the sentence.
    ... 4, add "virtuous " to the sentence.
    ... 5, add "heart-warming " ...
    ... 6, add "tear-jerking " ...
    ... 7, add "beautiful " ...
    ... 8, add "exhilarating " ...
    ... 9, add "emotional " ...
    If n is evenly divisible by 10, add "inspiring " to the sentence.
    Always end the string with "number is n!".

Examples

describeNum(13) ➞ "The most brilliant number is 13!"
// 13 is evenly divisble by 1 only

describeNum(4) ➞ "The most brilliant exciting virtuous number is 4!"
// 4 is evenly divisible by 1, 2 and 4

describeNum(21) ➞ "The most brilliant fantastic beautiful number is 21!"
// 21 is evenly divisible by 1, 3 and 7

describeNum(60) ➞ "The most brilliant exciting fantastic virtuous heart-warming tear-jerking inspiring number is 60!"
// 60 is evenly divisible by 1, 2, 3, 4, 5, 6 and 10

Notes

    Add words to the sentence in the order going down the list.
    Remember to add a space between each word.
    BONUS: Try to find the lowest number which uses all possible words in the sentence! */

let obj = {
  1: 'brilliant ', 2: 'exciting ', 3: "fantastic ", 4: "virtuous ", 5: "heart-warming ",
  6: "tear-jerking ", 7: "beautiful ", 8: "exhilarating ", 9: "emotional ",10:"inspiring "
}


function describeNum(n) {
  let str = "The most "
  for (let i = 1; i <= 10; i++) {
    if (n % i == 0) {
      str += obj[i]
    }
  }
  return str + `number is ${n}!`
}

console.log(describeNum(4))