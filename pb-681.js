/* Apocalyptic Numbers
In this challenge, you have to establish if a number is apocalyptic. A positive integer n greater than 0 is apocalyptic when 2 elevated to n contains 
one or more occurrences of 666 into it.

Given an integer n, implement a function that returns:

"Safe" if n is not apocalyptic.
"Single" if into 2^n there's a single occurence of 666.
"Double" if into 2^n there are two occurences of 666.
"Triple" if into 2^n there are three occurences of 666.
Examples
isApocalyptic(66) ➞ "Safe"
// 2^66 = 73786976294838206464

isApocalyptic(157) ➞ "Single"
// 2^157 =
// 182687704|666|362864775460604089535377456991567872

isApocalyptic(220) ➞ "Double"
// 2^220 =
// 168499|666|66969149871|666|8844293872691710232152640 ...

isApocalyptic(931) ➞ "Triple"
// 2^931 =
// 181520618710|666|8777829|666|13543689033219147973835375300177706525795402912251025924505025429015644085765356289525170040655573069487981555872533060373669
7259064676478076718090|666| ...
Notes
Any given n will be a positive integer in the range of 1 to 1000.
Occurrences have to be unique, you can't use digits that have already been matched again (see example #3, there are five adjacent 6, but only a possible match). */

function isApocalyptic(number) {
	let s=(BigInt(2)**(BigInt(number))).toString()
  let amount=s.match(/666/gi)
  if(!amount){
    return 'Safe'
  }else if(amount.length==1){
    return 'Single'
  }else if(amount.length==2){
    return 'Double'
  }else if(amount.length==3){
    return 'Triple'
  }
  
}
console.log(isApocalyptic(3423213))