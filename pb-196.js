/* 
Find the length of the longest sub-sequence of two distinct numbers whose difference is 1. A sub-sequence can be made by deleting any numbers in between.

Examples
almostUniform([1, 3, 2, 2, 5, 2, 3, 7]) ➞ 5
// [3, 2, 2, 2, 3]

almostUniform([1, 2, 3, 4]) ➞ 2
// [1, 2] or [2, 3] or [3, 4]

almostUniform([1, 1, 1, 1]) ➞ 0
// There is no sub-sequence of two distinct numbers. */



function almostUniform(nums) {
	 let uni=[...new Set(nums)]
	 if(uni.length>1){
         let  result=[]
	 let visited=[]
	 for(let i=0;i<nums.length;i++){
		if(visited.indexOf(nums[i])==-1){
		let group=[]
		for(let j=0;j<nums.length;j++){
			if(nums[i]-nums[j]==-1 || nums[i]==nums[j]){
		group.push(nums[j])
				 }
			   }
			   
		[...new Set(group)].length>1&&result.push(group)
		}
		visited.push(nums[i])
		 }
        return result.sort((a,b)=>b.length-a.length)[0].length
	}

	    return 0
}

console.log(almostUniform([-3, 7, 9, 1, -2, 9, 7, 1, -2, 9, -3, 9, 2, 7, 2, 9, 1, 9, 2, 7, -2, 1, 7, 2, 9, 7, 9, -3, 7, -3, 9, 7, 9, -3, 7, -2, 7]))