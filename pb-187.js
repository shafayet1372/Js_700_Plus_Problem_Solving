/* Create a function that determines how many number pairs are embedded in a space-separated string. The first numeric value in the 
space-separated string represents the count of the numbers, thus, excluded in the pairings.

Examples
number_pairs("7 1 2 1 2 1 3 2") ➞ 2
// (1, 1), (2, 2)

number_pairs("9 10 20 20 10 10 30 50 10 20") ➞ 3
// (10, 10), (20, 20), (10, 10)

number_pairs("4 2 3 4 1") ➞ 0
// Although two 4's are present, the first one is discounted.
Notes
Always take into consideration the first number in the string is not part of the pairing, thus, the count. It may not seem so useful 
as most people see it, but it's mathematically significant if you deal with set operations. */






function numberPairs(str) {

  let  str2=str.split(" ")
  let counter=0
  for(let i=1;i<str2.length;i++){
    
    for(let j=i+1;j<str2.length;j++){
      if(str2[i]==str2[j]){
        counter++
        str2.splice(j,1)
        break
      }
    }
    
  }
  return counter
  }

  console.log(numberPairs("4 2 3 4 1"))