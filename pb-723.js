/* Case and Index Inverter
Write a function that takes a string input and returns the string in a reversed case and order.

Examples
invert("dLROW YM sI HsEt") ➞ "TeSh iS my worlD"

invert("ytInIUgAsnOc") ➞ "CoNSaGuiNiTY"

invert("step on NO PETS") ➞ "step on NO PETS"

invert("XeLPMoC YTiReTXeD") ➞ "dExtErIty cOmplEx"
Notes
No empty strings and will neither contain special characters nor punctuation.
A recursive version of this challenge can be found via this link. */

function invert(s) {
  let str = s.split(" ")
  return str.map(x => {

    return x.split("").map(y => y.toLowerCase() == y ? y.toUpperCase() : y.toLowerCase()).reverse().join("")
  }
  ).reverse().join(" ")
}

console.log(invert("dLROW YM sI HsEt"))