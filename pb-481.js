/* Count the Points in a Circle
Count the amount of coordinates on a two-dimensional grid that are inside a given circle. The function has four arguments: the points, 
the circle's center x, y and the circle's radius. For example:

Examples
pointsInCircle([
  { x: 0, y: 0 },
  { x: 1, y: 1 },
  { x: 0, y: 5 },
  { x: 10, y: 10 }
], 0, 0, 5) ➞ 2
Notes
Only count the coordinates that are in the circle, not the ones that are on the border. */


function pointsInCircle(points, centerX, centerY, radius) {
  let counter = 0
  for (let i = 0; i < points.length; i++) {
    let { x, y } = points[i]
    let v = Math.sqrt(Math.pow(centerX - x, 2) + Math.pow(centerY - y, 2))
    if (v < radius) {
      counter++
    }

  }
  return counter
}

console.log(pointsInCircle([{ x: 10, y: 10 }, { x: 33, y: 54 }, { x: 7, y: 98 }, { x: 516, y: 85 }], 23, 94, 100))