/* 
A number num, that elevated to the power of another number k "ends" with the same num, it's automorphic.

5² = 25
// It's automorphic because "25" ends with "5"

5³  = 125
// It's automorphic because "125" ends with "5"

76⁴ = 33362176
// It's automorphic because "33362176" ends with "76"
A number can have various powers that make it automorphic (i.e. look at number 5 in the above example). In this challenge, you have to verify if 
the given number is automorphic for each power from 2 up to 10.

Given a non-negative integer num, implement a function that returns the string:

"Polymorphic" if num is automorphic for every power from 2 up to 10.
"Quadrimorphic" if num is automorphic for only four powers (any from 2 up to 10).
"Dimorphic" if num is automorphic for only two powers (any from 2 up to 10).
"Enamorphic" if num is automorphic for only one power (any from 2 up to 10).
"Amorphic" if num is not automorphic for for any powers from 2 up to 10.
Examples
powerMorphic(5) ➞ "Polymorphic"
// From 2 up to 10, every power of 5 ends with 5

powerMorphic(21) ➞ "Enamorphic"
// 21⁶ = 85766121

powerMorphic(7) ➞ "Dimorphic"
// 7⁵ = 716807
// 7⁹ = 40353607

powerMorphic(4) ➞ "Quadrimorphic"
// 4³ = 64
// 4⁵ = 1024
// 4⁷ = 16384
// 4⁹ = 262144

powerMorphic(10) ➞ "Amorphic"
// There are no powers that make it automorphic
Notes
You can do a complete loop cycle to check if num is automorphic for each power, or you can try to spot the discriminants that permit you to shorten 
the logic of your code.
Despite being inspired by the OEIS sequence A003226, the assertions of this challenge are to be considered properly valid only in the specific context.
Note for JavaScript: the inputs will be given as BigInt (big integers) to avoid approximation errors but, besides the numbers notation, there are no 
differences in the procedure to adopt. You can find a compendium about the global object BigInt into the Resources tab. */






function powerMorphic(num) {
 let counter=0
 let i=2;

 while(i<11){
  let power=(num**BigInt(i)).toString().split("")
  let v=power.slice(power.length-num.toString().length,power.length)
  
  if(v.join("")==num){
    counter++
  }
  i++
}

if(counter==9){
  return "Polymorphic"
}else if(counter==4){
  return "Quadrimorphic"
}else if(counter==2){
 return "Dimorphic"
}else if(counter==1){
   return "Enamorphic"
}else{
  return "Amorphic"
}
}
console.log(powerMorphic(501n))

