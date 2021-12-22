/* Encoded String Parse
Create a function which takes in an encoded string and returns an object according to the following example:

Examples
parseCode("John000Doe000123") ➞ {
  firstName: "John",
  lastName: "Doe",
  id: "123"
}

parseCode("michael0smith004331") ➞ {
  firstName: "michael",
  lastName: "smith",
  id: "4331"
}

parseCode("Thomas00LEE0000043") ➞ {
  firstName: "Thomas",
  lastName: "LEE",
  id: "43"
}
Notes
The string will always be in the same format, first name, last name and id with zeros between them.
id numbers will not contain any zeros.
Bonus: Try solving this without RegEx. */







function parseCode(str) {
    let result = {}
    str = str.split("0")
    let counter = 0
    for (let i = 0; i < str.length; i++) {
        if (counter == 0 && str[i] !== '') {
            result['firstName'] = str[i]
            counter++
        } else if (str[i] !== '' && counter == 1) {
            result['lastName'] = str[i]
            counter++
        } else if (str[i] !== '' && counter == 2) {
            result['id'] = str[i]
        }
    }
    return result
}

console.log(parseCode("michael0smith004331"))