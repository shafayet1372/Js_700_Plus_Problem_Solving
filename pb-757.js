/* Bird Names to Four Letter Bird Codes
In the world of birding there are four-letter codes for the common names of birds. These codes are created by some simple rules:

If the bird's name has only one word, the code takes the first four letters of that word.
If the name is made up of two words, the code takes the first two letters of each word.
If the name is made up of three words, the code is created by taking the first letter from the first two words and the first two letters from the third word.
If the name is four words long, the code uses the first letter from all the words.
There are other ways codes are created, but this challenge will only use the four rules listed above.

In this challenge you will write a function that takes an array of strings of common bird names and create the codes for those names based on the 
rules above. The function will return an array of codes in the same order in which the input names were presented.

Examples:
birdCode(["Black-Capped Chickadee", "Common Tern"]) ➞ ["BCCH", "COTE"]

birdCode(["American Redstart", "Northern Cardinal"]) ➞ ["AMRE","NOCA"]

birdCode(["Bobolink", "American White Pelican"]) ➞ ["BOBO","AWPE"]
Notes
The four-letter codes in the returned array should be in UPPER CASE.
If a common name has a hyphen/dash, it should be considered a space */

function birdCode(arr) {
	let result=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i].includes('-')){
            arr[i]=arr[i].replace('-',' ')
        }
        let val=arr[i].split(" ")
        if(val.length==1 ){
            result.push(val[0].match(/^[a-z]{4}/ig).join("").toUpperCase())
        }else if(val.length==2){
            result.push(val.map(x=>x.slice(0,2)).join("").toUpperCase())
        }else if(val.length==3){
            result.push((val[0].slice(0,1)+val[1].slice(0,1)+val[2].slice(0,2).toUpperCase()))
        }else{
            result.push(val.map(x=>x[0]).join("").toUpperCase())
        }
    }
    console.log(result)
}

console.log(birdCode(["Bobolink", "American White Pelican"]))