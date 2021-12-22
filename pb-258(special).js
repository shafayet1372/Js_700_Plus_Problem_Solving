/* You are a skilled diamondsmith whose business is getting better by the day.Eventually, you decided that you needed to scale to keep up with demand.

Build a diamond - cutting machine(i.e.write a function that takes in a positive integer representing the raw stone's carat).
The output would be the finished diamond and tag indicating its quality, arranged in an array of two elements.
The first element would be an array of arrays representing the diamond.
The second element would be a string indicating "perfect cut" if all the diamond's edges are pointy or "good cut" otherwise.
Examples
diamond(3) ➞[
  [[0, 1, 0],
  [1, 0, 1],
  [0, 1, 0]],
  "perfect cut"
]

// Perfect edge.
diamond(4) ➞[
  [[0, 1, 1, 0],
  [1, 0, 0, 1],
  [0, 1, 1, 0]],
  "good cut"
]

// First and last rows had blunt edges with two 1s each.
diamond(11) ➞[
  [[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]],
  "perfect cut"
]
Notes
Cut is more important than carat in the diamondsmith's world. Hence, to reduce the number of blunt edges, the machine would reduce the size of the diamond.
In the second example of a 4 - carat raw stone, the machine produces a finished diamond of only 3 rows so that there would only be 2 blunt edges, instead of 4.
In the first and third examples, the machine was able to produce diamonds of n - rows from n - carat stones. */





function diamond(carat) {
  let main = [], middle = Math.floor(carat / 2), result = []
  let len = carat
  middle = carat % 2 == 0 ? middle - 1 : middle
  carat = len % 2 == 0 ? carat - 1 : carat
  let rightMiddle = middle, leftMiddle = middle
  for (let i = 0; i < carat; i++) {
    let g = []
    for (let j = 0; j < len; j++) {
      if (i == 0) {
        if (j == middle) {
          if (len % 2 == 1) {
            g[j] = 1
          } else {
            g[j] = 1
            g[j + 1] = 1
            j++
            rightMiddle = j
          }
        }
        else {
          g[j] = 0
        }
      }
      if (i != 0) {
        if (j == leftMiddle) {
          g[leftMiddle] = 1
        } else if (j == rightMiddle) {
          g[rightMiddle] = 1
        } else {
          g[j] = 0
        }
      }

    }
    if (i < middle) {
      if (len % 2 == 1) {
        leftMiddle--
        rightMiddle++
      } else {
        leftMiddle--
        rightMiddle++
      }
    }  else {
       leftMiddle++
       rightMiddle--
    }
      main.push(g)

  }
  result = [main]
  return len % 2 == 0 ? [...result, "good cut"] : [...result, "perfect cut"]
}

console.log(diamond(11))