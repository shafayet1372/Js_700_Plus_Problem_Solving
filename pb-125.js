/* Oh no! I've lost my glasses, but paradoxically, I need glasses to find my glasses!

Please help me out by showing me the index in the list which contains my glasses. They look like two capital Os, with any number of dashes in between!

This means that both O--O and O------------O are valid glasses, but not O----#--O for example!
Search thoroughly, maybe you'll find my glasses in places such as 'dustO-Odust'
Examples
findGlasses(["phone", "O-O", "coins", "keys"]) ➞ 1

findGlasses(["OO", "wallet", "O##O", "O----O"]) ➞ 3

findGlasses(["O--#--O", "dustO---Odust", "more dust"]) ➞  */


function findGlasses(arr) {
	
    for(let i=0;i<arr.length;i++){
        if(/O[-]+O/g.test(arr[i])){
            return i
        }
    }
    
}

console.log(findGlasses(["OO", "wallet", "O##O", "O----O"]))