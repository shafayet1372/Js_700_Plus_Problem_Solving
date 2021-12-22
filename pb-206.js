/* When a person receives a blood transfusion, it is essential to make sure that the donor's blood type is compatible with the receiver's blood type.
 Receiving a blood type that is not compatible with your own can be life-threating, so blood banks always make sure to note the type of blood they 
receive from donors so that they can ensure a safe transfusion.

Blood types are named according to three factors: presence of antigen A, presence of antigen B, and presence of Rh factor. If antigen A is found, the 
blood type includes the letter "A". If antigen B is found, the blood type includes the letter "B". And if the Rh factor is present, the blood type ends 
with "+"; otherwise, it ends with "-". If neither antigen A nor antigen B are found, the blood type includes the letter "O".

For example, a person with only antigen A would have the blood type "A-". A person with both antigens A and B and the Rh factor would have blood type 
"AB+", and a person wih only the Rh factor would have blood type "O+".

The rules for giving and receiving blood are as follows:

A person with antigen A may only give blood to another person with antigen A.
A person with antigen B may only give blood to another person with antigen B.
A person with the Rh factor may only give blood to another person with the Rh factor.
A person with none of the above factors (O-) can give blood to anyone.
Write a function that takes in a donor's and receiver's blood types as strings and returns whether or not the donor can safely give blood to the receiver,
 according to the rules above.

Examples
canGiveBlood("O+", "A+") ➞ true

canGiveBlood("A-", "B-") ➞ false

canGiveBlood("A-", "AB+") ➞ true
Notes
All letters are capital.
Each blood type will be one of the following strings: "O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-".
 */







function canGiveBlood(donor, receiver) {
  let a1=donor.match(/[\w]+/g)[0]
  let ga1=donor.match(/[+-]/)[0]
  
  let b1=receiver.match(/[\w]+/g)[0]
  let gb1=receiver.match(/[+-]/)[0]
  
  if((ga1=="+" && gb1=="+") && a1=='O'){
    return true
  }else if(ga1=="+" && gb1=="+"  && a1.length!=2){
    return true
  }else if(ga1=="+" && gb1=="+"  && a1.length==b1.length){
    return true
  }
  else if(ga1=='-' && gb1=='-' && a1=='O'){
    return true
  }else if(ga1=='-' && gb1=='-'){
    return false
  }else if(((a1.length==1 && b1.length==2) || (b1.length==1 && a1.length==2)) && ga1=='-' ) {
    return true
  }else{
    return false
  }

}

console.log(canGiveBlood("AB+", "A+"))