console.log("Lect 5 ext lib demo")

// use validator library
const v = require('validator')

console.log(v.isEmail("tby@sp.edu.sg"))
console.log(v.isEmail("a@a.a"))
console.log(v.isAlphanumeric("a123"))
console.log(v.isAlphanumeric("a123?"))

var attack = "<script>alert('XSS!')</script>"
// demo to sanitise attack
var output = v.escape(attack)
console.log(output)

var input = "Hi there!\r\n Welcome to Secure Coding"
/** 
 * source: https://www.npmjs.com/package/validator
 * stripLow - remove characters with a numerical value < 32 and 127, 
 * mostly control characters. 
 * If keep_new_lines is true, newline characters are preserved 
 * (\n and \r, hex 0xA and 0xD). Unicode-safe in JavaScript.
 */
var output2 = v.stripLow(input)
console.log(output2)
