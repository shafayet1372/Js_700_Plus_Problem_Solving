/* 
Two two-dimensional arrays are isomorphic if they have the same number of rows and each pair of respective rows contains the same number of elements.

Given two two-dimensional arrays, check if they are isomorphic.

Example

For

array1 = [[1, 1, 1],
          [0, 0]]
and

array2 = [[2, 1, 1],
          [2, 1]]
the output should be
areIsomorphic(array1, array2) = true;

For

array1 = [[2],
          []]
and

array2 = [[2]]
the output should be
areIsomorphic(array1, array2) = false. */



function areIsomorphic(array1, array2) {
let result=true

if(array1.length==array2.length){

for(let i=0;i<array1.length;i++){
    if(array1[i].length!=array2[i].length){
        result=false
        break;
    }
}
}else{
    result=false
}
return result
}
console.log(areIsomorphic([[2], 
    []],[[2]]
    ))