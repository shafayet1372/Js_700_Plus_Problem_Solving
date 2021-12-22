/* 
Given an array of integers, sort its elements by the difference of their largest and smallest digits. 
In the case of a tie, that with the larger index in the array should come first.

Example

For a = [152, 23, 7, 887, 243], the output should be
digitDifferenceSort(a) = [7, 887, 23, 243, 152].

Here are the differences of all the numbers:

152: difference = 5 - 1 = 4;
23: difference = 3 - 2 = 1;
7: difference = 7 - 7 = 0;
887: difference = 8 - 7 = 1;
243: difference = 4 - 2 = 2.
23 and 887 have the same difference, but 887 goes after 23 in a, so in the sorted array it comes first. */

function digitDifferenceSort(a) {
let i=0;
let digitDiff=[]
while(i<a.length){
    let digit=a[i].toString().split("").sort((a,b)=>parseInt(a)-parseInt(b))
   
    if(digit.length>1){
        digitDiff.push(parseInt(digit[digit.length-1])-parseInt(digit[0]))
    }else{
        digitDiff.push(parseInt(digit[0])-parseInt(digit[0]))
    }
    i++
}



let swap1,swap2
for(let m=0;m<a.length;m++){
    for(let n=m+1;n<a.length;n++){
       if(digitDiff[m]>digitDiff[n]){
           swap1=digitDiff[m]
           swap2=a[m]
           digitDiff[m]=digitDiff[n]
           a[m]=a[n]
           digitDiff[n]=swap1
           a[n]=swap2
       }else if(digitDiff[m]==digitDiff[n]){
           if(m<n){
               swap2=a[m]
               a[m]=a[n]
               a[n]=swap2
           }
       }
    }
}
return a
}


console.log(digitDifferenceSort( [561, 798, 132, 339, 218, 724, 462, 332, 9, 343, 592, 34, 95, 292, 626, 970]))

