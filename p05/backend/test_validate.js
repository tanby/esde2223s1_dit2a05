console.log("test validate")

let str1 = "Mary had a little lamb"
//--  /^Mary/ is a regular expression
// test is a built in function for regex
console.log(/^Mary/.test(str1))
console.log(/lamb$/.test(str1))
console.log(/had a/.test(str1))
console.log(/big lamb/.test(str1))
console.log(/big|lamb/.test(str1))
// match is a function in string
console.log("Chapter 5.1".match(/\d\.\d/)) 
console.log("Chapter 511".match(/\d\.\d/)) 
// if want to test if there's a match
console.log("Chapter 5.1".match(/\d\.\d/) != null) 

// a simple demo using test
let rgx = /^\d+/
let id = "12345"
if(rgx.test(id)){
    console.log("valid id")
}else{
    console.log("invalid id")
}

// in case you need to use RegExp
// which is useful if the regexp change with context
// need \\ double 
let regex = new RegExp("^\\d+")
console.log(regex.test(id))
let regex2 = new RegExp("^[0-9]+")
console.log(regex2.test(id))