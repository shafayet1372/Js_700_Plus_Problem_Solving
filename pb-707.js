/* Histogram Function
Build a function that creates histograms. Every bar needs to be on a new line and its length corresponds to the numbers in the array passed as
 an argument. The second argument of the function represents the character to be used for the bar.

histogram(arr, char) ➞ str
Examples
histogram([1, 3, 4], "#") ➞ "#\n###\n####"

#
###
####

histogram([6, 2, 15, 3], "=") ➞ "======\n==\n===============\n==="

======
==
===============
===

histogram([1, 10], "+") ➞ "+\n++++++++++"

+
++++++++++
Notes
For better understanding try printing out the result. */

function histogram(arr, char) {
    let str = ""
    for (let i = 0; i < arr.length; i++) {
        if (i != arr.length - 1) {
            str = str + char.repeat(arr[i]) + '\n'
        } else {
            str = str + char.repeat(arr[i])

        }

    }
    return str
}

console.log(histogram([1, 3, 4], "#"))