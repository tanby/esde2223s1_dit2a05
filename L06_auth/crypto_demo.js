//-- crypto is already builtin. so no need to npm install
var crypto = require("crypto")

//-- simple demo to do  encryption and decrypt
var stringToEncrypt = "my secret to transmit"
var key = "0123456789abcdef" //-- 16 characters, to simulate 16 bytes
var iv = "fedcba9876543210" //-- also 16 bytes, this is not secret

var mykey = crypto.createCipheriv('aes-128-cbc', key, iv)
var mystr = mykey.update(stringToEncrypt, 'utf8', 'hex')
mystr += mykey.final('hex')
// show encrypted message
console.log(mystr)

//-- let's decrypt
var encryptedStr = mystr

mykey2 = crypto.createDecipheriv('aes-128-cbc', key, iv)
mystr2 = mykey2.update(encryptedStr, 'hex', 'utf8')
mystr2 += mykey2.final('utf8')
//-- show decrypted message
console.log(mystr2)