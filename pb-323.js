/* Video Length in Seconds
You are given the length of a video in minutes. The format is mm:ss (e.g.: "02:54"). Create a function that takes the video length and return it in seconds.

Examples
minutesToSeconds("01:00") ➞ 60

minutesToSeconds("13:56") ➞ 836

minutesToSeconds("10:60") ➞ false
Notes
The video length is given as a string.
If the number of seconds is 60 or over, return false (see example #3).
You may get a number of minutes over 99 (e.g. "121:49" is perfectly valid). */


function minutesToSeconds(time) {
  let times = time.split(":")

  if (parseInt(times[1]) >= 60) {
    return false
  }
  return parseInt(times[0]) * 60 + parseInt(times[1])
}

console.log(minutesToSeconds("13:56"))