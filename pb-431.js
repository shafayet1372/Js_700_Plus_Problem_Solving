/* Likes vs. Dislikes
YouTube currently displays a like and a dislike button, allowing you to express your opinions about particular content. It's set up in such a way that 
you cannot like and dislike a video at the same time.

There are two other interesting rules to be noted about the interface:

Pressing a button, which is already active, will undo your press.
If you press the like button after pressing the dislike button, the like button overwrites the previous "dislike" state. The same is true for the other way round.
Create a function that takes an array of button inputs and returns the final state.

Examples
likeOrDislike(["Dislike"]) ➞ "Dislike"

likeOrDislike(["Like", "Like"]) ➞ "Nothing"

likeOrDislike(["Dislike", "Like"]) ➞ "Like"

likeOrDislike(["Like", "Dislike", "Dislike"]) ➞ "Nothing"
Notes
If no button is currently active, return "Nothing".
If the array is empty, return "Nothing". */



function likeOrDislike(arr) {
  if (arr.length == 1) {
    return arr[0]
  }else if(arr.length==0){
    return 'Nothing'
  }
  let counter=0
  let triger, state
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != arr[i + 1]) {
      triger = 1
      counter=0
      state = arr[i + 1]
    } else {
      triger = 0
      counter++
    }
    if((counter>0 && counter%2==0)&& i==arr.length-2){
      return arr[i+1]
    }
  }
  return triger == 0 ? "Nothing" : state

}

console.log(likeOrDislike(['Like', 'Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Like', 'Like']))