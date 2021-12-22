/* At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you, and order one at a time 
(in the order specified by bills).

Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to 
each customer so that the net transaction is that the customer pays $5.

Return true if and only if you can provide every customer with correct change.

Examples
lemonade([5, 5, 5, 10, 20]) ➞ true

lemonade([5, 5, 10, 10, 20]) ➞ false

lemonade([10, 10]) ➞ false

lemonade([5, 5, 10]) ➞ true
Notes
You don't have any change in hand at first.
bills is an integer array.
bills[i] will be either 5, 10, or 20. */








function lemonade(bills) {
  let change=[],result=[],counter=0,found
  for(let i=0;i<bills.length;i++){
   if(bills[i]==5){
     change.push(bills[i])
   }else{
    
     counter++
     let returnBack=bills[i]-5
     if(returnBack==5){
       if(change.indexOf(5)>=0){
         result.push(true)
         change.splice(change.indexOf(5),1)
         change.push(bills[i])
       }
     }else{
         let remove=[]
         for(let m=0;m<change.length;m++){
             found=false
             sum=change[m]
             remove.push(m)
            for(let l=0;l<change.length;l++){
              if(l!=m){
                sum=sum+change[l]
                remove.push(l)
                if(sum==returnBack){
                  found=true
                  break;
                }
                if(l==2){
                  sum=change[m]
                }
              }
            }
           
            if(found){
              for(let k=0;k<change.length;k++){
                change.splice(remove[k],1)
              }
              result.push(true)
              break;
            }
          }
        }

     }
  
  }
  return result.length==counter
}

console.log(lemonade([5, 10, 5, 5, 5, 20, 5, 10, 20, 5, 10, 20, 10]))