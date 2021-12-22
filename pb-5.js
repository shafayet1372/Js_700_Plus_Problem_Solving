/* Sum all the prime numbers up to and including the provided number. */


const sumPrimeNumber=(number)=>{
    let sum=0
    
    let counter
    let m=1
    while(m<=number){
      counter=0
     for(let i=1;i<=m;i++){  
       if(m%i==0 ){
         counter++
       }
     }
     if(counter==2){
       sum+=m
     }
      m++
    }
    return sum
    }
    console.log(sumPrimeNumber(10))