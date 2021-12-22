/* 

Burglary Series (13): Sort That List
The insurance guy tells you he needs an updated list of the stolen goods, and surely only to annoy you, he adds, "in reverse alphabetical order".

Given an object with the stolen items, return a new object with the list in reverse alphabetical order.

Examples
{ c: 100, a: 50, b: 10, d: 50 } ➞ { d: 50, c: 100, b: 10, a: 50 }

{ ab: 10, ac: 10, ad: 10 } ➞ { ad: 10, ac: 10, ab: 10 }

{ piano: 5, stereo: 10, suitcase: 1 } ➞ { suitcase: 1, stereo: 10, piano: 5 }
Notes
Please note that one should not rely on property order of an ordinary Object: Although the keys of an ordinary Object are ordered now, they didn't used to be, 
and the order is complex. As a result, it's best not to rely on property order. MDN Source */







function sortList(obj) {

    let result = []
    for (let v in obj) {
        result.push({ ['name']: v, amount: obj[v] })
    }

    return result.sort((a, b) => {
        let a1
        let b1
        if (a.name.charCodeAt(0) == b.name.charCodeAt(0)) {

            let index
            for (let i = 0; i < a.name.length; i++) {

                if (a.name.charCodeAt(i) != b.name.charCodeAt(i)) {
                    index = i
                    break;
                }
            }

            a1 = a.name.charCodeAt(index)
            b1 = b.name.charCodeAt(index)
        } else {
            a1 = a.name.charCodeAt(0)
            b1 = b.name.charCodeAt(0)
        }
        return b1 - a1
    }) .reduce((acc, val) => {
            acc[val.name] = val.amount
            return acc
        }, {})

}

console.log(sortList({ ab: 10, ac: 10, ad: 10 }))