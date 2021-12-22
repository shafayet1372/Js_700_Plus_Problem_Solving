/* Create a function that takes number of units consumed by the customer and returns calculated Electricity Bill as per following conditions:

First 100 Units will be charged at $1/unit.
Next 100 Units will be charged at $2/unit.
Next 100 Units will be charged at $3/unit.
Next 200 Units will be charged at $4/unit.
Next Units will be charged at $5/unit.
10% tax to be added in final amount.
Extra $15 to be added for Meter Charge.
Examples
electricityBill(100) ➞ 125
// 100 units at $1/unit = 100,
// 10% Tax = 10,
// $15 for Meter Charge = 15,
// Electricity Bill = 100 + 10 + 15

electricityBill(225) ➞ 427.5
// 100 units at $1/unit = 100, 100 units at $2/unit = 200, 25 units at $3/unit = 75
// 10% Tax = 37.5,
// 15$ for Meter Charge = 15,
// Electricity Bill = 100 + 200 + 75 + 22.5 + 15 = 427.50

electricityBill(300) ➞ 675
// 100 units at $1/unit = 100, 100 units at $2/unit = 200, 100 units at $3/unit = 300
// 10% Tax = 60,
// 15$ for Meter Charge = 15,
// Electricity Bill = 100 + 200 + 300 + 60 + 15 = 675
Notes
Return final calculated Electricity Bill rounded up to two decimal places. */






function electricityBill(units) {

    let sum = 0, unit = 0
    if (units <= 100) {
        sum = sum + units * 1
    } else if (units > 100 && units <= 200) {
        sum = sum + (units - 100) * 2 + 100
    } else if (units > 200 && units <= 300) {
        sum = sum + (units - 200) * 3 + 300
    } else if (units > 300 && units <= 500) {
        sum = sum + (units - 300) * 4 + 600
    } else {
        sum = sum + (units - 500) * 5 + 1400
    }

    if ((sum + ((sum / 100) * 10) + 15).toString().includes('.')) {
        return Math.ceil((sum + ((sum / 100) * 10) + 15) * 100) / 100
    }
    return (sum + ((sum / 100) * 10) + 15)
}

console.log(electricityBill(33.31))