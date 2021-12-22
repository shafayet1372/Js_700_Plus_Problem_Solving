/* Create a function that takes in two arrays and determines whether there exists a flush.

The first array represents the 5 cards dealt on the table.
The second array represents the 2 cards in your hand.
Notation: card number and suit (abbreviated as S = Spades, H = Hearts, D = Diamonds, C = Clubs) separated by an underscore.

Examples
checkFlush(["A_S", "J_H", "7_D", "8_D", "10_D"], ["J_D", "3_D"]) ➞ true // diamond flush

checkFlush(["10_S", "7_S", "9_H", "4_S", "3_S"], ["K_S", "Q_S"]) ➞ true // spade flush

checkFlush(["3_S", "10_H", "10_D", "10_C", "10_S"], ["3_S", "4_D"]) ➞ false
Notes
Hint: If there aren't at least 3 cards of the same suit on the table, there is zero chance of there being a flush.
 */







function checkFlush(table, hand) {
    let result = []
    for (let i = 0; i < hand.length; i++) {
        let counter = 0
        let mySuit = hand[i].split('_')[1]
        let rege = new RegExp(`${mySuit}`, 'i')
        for (let j = 0; j < table.length; j++) {
            if (rege.test(table[j])) {
                counter++
            }

        }
        result.push(counter)
    }
    return result.every(val => val >= 3)
}

console.log(checkFlush(["A_S", "J_H", "7_D", "8_D", "10_D"], ["J_D", "3_D"]))