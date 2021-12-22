/* Create a function that returns the sum of missing numbers from the given array.

Examples
sumMissingNumbers([4, 3, 8, 1, 2]) ➞ 18
5 + 6 + 7 = 18

sumMissingNumbers([17, 16, 15, 10, 11, 12]) ➞ 27
13 + 14 = 27

sumMissingNumbers([1, 2, 3, 4, 5]) ➞ 0
No Missing Numbers (i.e. all numbers in [1, 5] are present in the list)
 */


function sumMissingNumbers(arr) {
	arr=arr.sort((a,b)=>a-b)
    let num=arr[0]
    let last=arr[arr.length-1]
    let i=0
    let sum=0
    while(num<last){
        if(arr[i]!=num && arr[i]!=undefined){
          sum=sum+num
                       
          }
        
        if(arr[i]>num ){
            i=i-1
        }
            i++
            num++
    }
    return sum
}

console.log(sumMissingNumbers([4, 3, 8, 1, 2]))