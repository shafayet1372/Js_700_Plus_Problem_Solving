/* Double Character Swap
Write a function to replace all instances of character c1 with character c2 and vice versa.

Examples
doubleSwap( "aabbccc", "a", "b") ➞ "bbaaccc"

doubleSwap("random w#rds writt&n h&r&", "#", "&")
➞ "random w&rds writt#n h#r#"

doubleSwap("128 895 556 788 999", "8", "9")
➞ "129 985 556 799 888"
Notes
Both characters will show up at least once in the string.
 */

function doubleSwap(str, c1, c2) {
    let s = str.split("")
    return s.map(x => {
        if (x == c1) {
            return c2
        } else if (x == c2) {
            return c1
        }
        return x
    }).join("")
}

console.log(doubleSwap("aabbccc", "a", "b"))