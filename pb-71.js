/* 
Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to the sum of
squared digits of the previous element. The sequence ends once an element that has already been in the sequence appears again.

Given the first element a0, find the length of the sequence.

Example

For a0 = 16, the output should be
squareDigitsSequence(a0) = 9.

Here's how elements of the sequence are constructed:

a0 = 16
a1 = 12 + 62 = 37
a2 = 32 + 72 = 58
a3 = 52 + 82 = 89
a4 = 82 + 92 = 145
a5 = 12 + 42 + 52 = 42
a6 = 42 + 22 = 20
a7 = 22 + 02 = 4
a8 = 42 = 16, which has already occurred before (a0) */

function squareDigitsSequence(a0) {
let counter=0
let ar=[]
let sum
let numbers

while(!ar.includes(a0)){
ar.push(a0)
numbers=a0.toString().split("")
sum=0
for(let i=0;i<numbers.length;i++){
    sum=sum+Math.pow(parseInt(numbers[i]),2)   
    console.log(numbers[i],sum)
}
counter++
a0=sum


}

return counter+1
}
console.log(squareDigitsSequence(103))
console.log(parseInt("0"))