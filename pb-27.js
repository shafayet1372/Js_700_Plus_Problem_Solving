/* You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth rate. With the assumption that you don't make 
any additional deposits, find out how long it would take for your balance to pass a specific threshold

For deposit = 100, rate = 20, and threshold = 170, the output should be
depositProfit(deposit, rate, threshold) = 3.

Each year the amount of money in your account increases by 20%. So throughout the years, your balance would be:

year 0: 100;
year 1: 120;
year 2: 144;
year 3: 172.8 */

function depositProfit(deposit, rate, threshold) {
let counter=0
let amount

while(deposit<threshold){
  amount=(rate/100)*deposit+deposit
  deposit=amount
  console.log(deposit)
  counter++
}
return counter
}


console.log(depositProfit(100,1,101))