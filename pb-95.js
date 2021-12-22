/* Let's call product(x) the product of x's digits. Given an array of integers a, calculate product(x) for each x in a, 
and return the number of distinct results you get.

Example

For a = [2, 8, 121, 42, 222, 23], the output should be
uniqueDigitProducts(a) = 3.

Here are the products of the array's elements:

2: product(2) = 2;
8: product(8) = 8;
121: product(121) = 1 * 2 * 1 = 2;
42: product(42) = 4 * 2 = 8;
222: product(222) = 2 * 2 * 2 = 8;
23: product(23) = 2 * 3 = 6.
As you can see, there are only 3 different products: 2, 6 and 8.
 */

function uniqueDigitProducts(a) {
let result=[]
let product
for(let i=0;i<a.length;i++){
    let digit=a[i].toString().split("")
        product=1
        console.log(digit)
        if(digit.length>1){
         for(let j=0;j<digit.length;j++){
          product=product*parseInt(digit[j])
         
         }    
         result.push(product)
    }else{
        result.push(parseInt(digit))
    }
}
return [...new Set(result)].length
}


console.log(uniqueDigitProducts( [2, 8, 121, 42, 222, 23]))