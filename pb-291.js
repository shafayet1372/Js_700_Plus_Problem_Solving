/* Super Strict Grading
Given an object literal of student names and an array of their test scores over the semester, return a list of all the students who passed the 
course (in alphabetical order). However, there is one more thing to mention: the pass mark is 100% in everything!

Examples
whoPassed({
  "John" : ["5/5", "50/50", "10/10", "10/10"],
  "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
  "Adam" : ["8/10", "22/25", "3/5", "5/5"],
  "Barry" : ["3/3", "20/20"]
}) ➞ ["Barry", "John"]

whoPassed({
  "Zara" : ["10/10"],
  "Kris" : ["30/30"],
  "Charlie" : ["100/100"],
  "Alex" : ["1/1"]
}) ➞ ["Alex", "Charlie", "Kris", "Zara"]

whoPassed({
  "Zach" : ["10/10", "2/4"],
  "Fred" : ["7/9", "2/3"]
}) ➞ []
Notes
All of a student's test scores must be 100% to pass.
Remember to return an array of student names sorted alphabeticall */







function whoPassed(students) {
    let names = [], i = 0
    for (let v in students) {
        i++

        let result = [...students[v]].every((val) => {
            let score = val.split("/")
            return parseInt(score[0]) == parseInt(score[1])
        })
        if (result) {
            names.push(v)
        }

    }
    return names.sort((a, b) => {
        let a1
        let b1
        if (a.charCodeAt(0) == b.charCodeAt(0)) {
            let index

            for (let i = 0; i < a.length; i++) {
                if (a.charCodeAt(i) != b.charCodeAt(i)) {
                    index = i
                    break
                }

            }
            a1 = a.charCodeAt(index)
            b1 = b.charCodeAt(index)
        } else {
            a1 = a.charCodeAt(0)
            b1 = b.charCodeAt(0)
        }
        return a1 - b1
    })
}
console.log(whoPassed({ "Marilu": ["64/64", "45/45", "81/81"], "Ramona": ["50/50", "2/2", "25/25", "62/62"], "Griselda": ["75/75", "31/31", "99/99", "45/45", "52/52"], 
"Frankie": ["4/4", "63/63", "99/99"], "Fernanda": ["80/80"], "Halina": ["33/84", "4/93", "69/89", "39/41", "30/77", "2/97", "61/95", "3/79"] }))

