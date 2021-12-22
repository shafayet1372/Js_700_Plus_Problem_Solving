// This problem is a continuation of Uno Part 1 (although you don't need to complete that problem to complete this one).

// It's your turn to play again. Create a function that takes as its arguments (1) your hand (an array of cards), and (2)
 the face-up card. In Uno, you are able to play a card from your hand if either:

// One of the card colors in your hand matches the face-up card's color.
// One of the card numbers in your hand matches the face-up card's number.
// Write a function that will return:

// "Uno!" if after playing your card, you are left with a single card.
// "You won!" if after playing your card, you are left with zero cards (an empty array).
// "Keep going..." otherwise.
// Examples
// decision(["yellow 3", "red 3"], "red 10") ➞ "Uno!"

// decision(["blue 1"], "blue 5") ➞ "You won!"

// decision(["blue 1", "green 2", "yellow 4", "red 2"], "blue 5") ➞ "Keep going..."

function decision(hand, face) {
  let faceSplit=face.split(" ")
 
  let faceUpColorName=faceSplit[0]
  let faceUpcolorNum=faceSplit[1]

  for(let i=0;i<hand.length;i++){
    let handCardSplit=hand[i].split(" ")
    let handCardColor=handCardSplit[0]
    let handCardNum=handCardSplit[1]
    if(faceUpColorName==handCardColor || faceUpcolorNum==handCardNum){
      hand.splice(i,1)
    }
    
  }
 
  if(hand.length==1){
    return "Uno!"
  }else if(hand.length==0){
    return "You won!"
  }else{
    return "Keep going..."
  }
}

console.log(decision(['blue 7'], 'green 7'))