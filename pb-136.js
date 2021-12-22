/* Given an array of five values, calculate the average star rating, rounded to two decimal places. The array contains user votes per star, 
so the first element [0] contains the number of 1-star ratings and the last element [4], the number of 5-star ratings.

Return the average score in [brackets], followed by a space and asterisks' * to represent the star rating, rounded to the nearest whole star.

Examples
starRating([55, 67, 98, 115, 61]) ➞ "[3.15] ***"

starRating([0, 2, 0, 1, 23]) ➞ "[4.73] *****"

starRating([16, 17, 23, 40, 45]) ➞ "[3.57] ****"
 */


function starRating(arr) {
	let result=0
    let stars=[]
    let star=1,totalrating=0
    for(let i=0;i<arr.length;i++){
       result=result+(star*arr[i])
       totalrating=totalrating+arr[i]
       star++
    }
    let avgrating=(result/totalrating).toFixed(2)
    for(let j=0;j<Math.round(avgrating);j++){
        stars.push("*")
    }
    return `[${avgrating}] ${stars.join("")}`
}

console.log(starRating([0, 2, 0, 1, 23]))