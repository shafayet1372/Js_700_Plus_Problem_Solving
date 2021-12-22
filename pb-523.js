/* Lottery Ticket
Given a lottery ticket (ticket), represented by an array of 2-value arrays, create a function to find out if you've won the jackpot.

To do this, you must first count the "mini-win" on your ticket. Each subarray has both a string and a number within it. If the character 
code of any of the characters in the string matches the number, you get a mini-win. Note you can only have one mini-win per subarray.

Once you have counted all of your mini-wins, compare that number to the other input provided (win). If your number of mini-wins is more than
 or equal to win, return Winner!. Else, return Loser!.

Examples
lottery([["YYW", 70], ["WXK", 65], ["RPDI", 88]], 2)
➞ "Loser!"

lottery([["KG", 80], ["NTBBVZ", 79], ["CI", 73], ["AGXMEE", 74], ["IU", 68], ["VOSP" , 84]], 1)
➞ "Winner!"

lottery([["ZSAMZB", 81], ["XWWCXP", 72], ["SYBRQOHP", 88], ["HJSVV", 75]], 1)
➞ "Loser!"
Notes
All inputs will be in the correct format.
Strings on ticket are not always the same length. */


function lottery(ticket, win) {
  let result = ticket.filter(val => {
    let str = val[0]
    let s = str.split("")
    let num = val[1]
    return s.some((val1, i) => str.charCodeAt(i) == num)
  })
  return result.length >= win?"Winner!":"Loser!"
}

console.log(lottery([["KG", 80], ["NTBBVZ", 79], ["CI", 73], ["AGXMEE", 74], ["IU", 68], ["VOSP", 84]], 1))