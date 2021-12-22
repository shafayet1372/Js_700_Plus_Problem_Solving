/* Create a function that expands a number into a string as shown below:

25 ➞ "20 + 5"
70701 ➞ "70000 + 700 + 1"
685 ➞ "600 + 80 + 5"
Examples
expandedForm(70304) ➞ "70000 + 300 + 4"

expandedForm(1037903) ➞ "1000000 + 30000 + 7000 + 900 + 3"

expandedForm(802539) ➞ "800000 + 2000 + 500 + 30 + 9
 */

function expandedForm(num) {

    let str=num.toString().split("")
    let i=0
    let expanedstr
    let result=[]
    while(i<str.length){
        let j=i+1
        expanedstr=str[i]
        if(expanedstr!="0"){
            while(j<str.length){
                expanedstr=expanedstr+"0"
                j++
            }
            
            result.push(expanedstr)
        }
        
        i++
    }
    return result.join(" + ")
}

console.log(expandedForm(70701))