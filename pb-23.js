
/* Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

Check if the given string is a correct variable name.

Check if all digits of the given integer are even */

function variableName(name) {
  let exp=/^_*[a-zA-Z]+[\w]*$/
  return exp.test(name)

}




console.log(variableName("va[riable0"))