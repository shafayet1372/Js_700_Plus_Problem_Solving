/* Postfix Notation
Postfix notation is a mathematical notation in which operators follow their operands. In other words, pfexp1 pfexp2 op, where pfexp1 and pfexp2 
are both postfix expressions.

Some examples:

2 2 + is the postfix notation of the expression 2 + 2.
2 3 * 1 - 5 / is the postfix notation of the expression ((2 * 3) - 1) / 5.
Here you have to compute the result from a postfix expression.

Examples
postfix("2 2 +") ➞ 4
// 2 + 2 = 4

postfix("2 3 * 1 - 5 /") ➞ 1
// ((2 * 3) - 1) / 5 = (6 - 1) / 5 = 5 / 5 = 1
Note
Operators and operands are separated by a space.
The operators +, -, *, / may be supported. */






function postfix(expr) {
  let operator = ['*', '+', '-', '/']
  let s = expr.split(" ")
  let stack = []

  for (let i = 0; i < s.length; i++) {
    if (operator.indexOf(s[i]) == -1) {
      stack.push(s[i])
    } else {
      let second = stack.pop()
      let first = stack.pop()
      stack.push(`(${first}${s[i]}${second})`)
    }

  }
  return eval(stack.join(""))
}

console.log(postfix("1 1 + 2 2 + -"))