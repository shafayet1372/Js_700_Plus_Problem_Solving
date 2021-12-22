/* 
Check if all digits of the given integer are even */

function evenDigitsOnly(n) {
 n=n.toString().split("")
 return n.every(val=>val%2==0)
}


console.log(evenDigitsOnly(2438622))