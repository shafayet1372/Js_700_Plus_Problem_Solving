/* Pricey Products
You will be given an object with various consumer products and their respective prices. Return a list of the products with a minimum price of 500 
in descending order.

Examples
products({"Computer" : 600, "TV" : 800, "Radio" : 50}) ➞ ["TV","Computer"]

products({"Bike1" : 510, "Bike2" : 401, "Bike3" : 501}) ➞ ["Bike1", "Bike3"]) 

products({"Loafers" : 50, "Vans" : 10, "Crocs" : 20}) ➞ []
Notes
N/A


 */





function products(r) {
  //shortway
  let result = [], finalresult = []
  for (let v in r) {
    if (r[v] >= 500) {
      result.push({ ['name']: v, ['price']: r[v] })
    }
  }
  return result.sort((a, b) => b.price - a.price).map(val => val.name)
  /* 
  //medium
  for(let i=0;i<result.length;i++){
    for(let j=i+1;j<result.length;j++){
      if(result[i].price<result[j].price){
        let swap=result[j]
        result[j]=result[i]
        result[i]=swap
    }
  }
  }
  for(let i=0;i<result.length;i++){
    finalresult.push(result[i].name)
  }
  return finalresult */


  /* 
  //very hard
    let result=[]
    let prev=0,i=true,last
    for(let v in r){
      if(r[v]>=500){
        
         if(r[v]>prev && i==true ){
           result[0]=v
           prev=r[v]
           i=false
           console.log(result)
         }else if(r[v]>prev){
        if(last<r[v]){
            result.unshift(v)
        }else{
          let swap=result[0]
          result[0]=v
          result[result.length]=swap
          last=prev
          prev=r[v]
         
        }
         
         }else{
           if(r[v]>last){
             let swap=result[result.length-1]
             result[result.length-1]=v
             result[result.length]=swap
             last=last
  
           }else{
            result[result.length]=v
            last=r[v]
           }
         }
        
      }
      
    }
    return result */
}

console.log(products({ "Calvin Klein": 500, "Armani": 5000, "Dolce & Gabbana": 2000 }))