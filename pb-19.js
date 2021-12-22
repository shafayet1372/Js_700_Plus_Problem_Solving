/* Call two arms equally strong if the heaviest weights they each are able to lift are equal.

Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

Given your and your friend's arms' lifting capabilities find out if you two are equally strong. */


function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
 let me=yourLeft+yourRight
 let frnd=friendsLeft+friendsRight
 console.log(me,frnd)
 return me!=frnd ?false:yourLeft==friendsRight||yourLeft==friendsLeft||yourRight==friendsRight||yourRight==friendsLeft

}
console.log(areEquallyStrong(yourLeft=15, yourRight=10, friendsLeft=15, friendsRight=10))