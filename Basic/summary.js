
//Notes 

/*types of datatypes in JS is 2
1. Primitive (call by value)
2.Non Primitive (reference value)


1. Primitive (call by value) :- String"", Number, Boolean(True & False),Null, Undefined, Symbol(make value unique)
2.Non Primitive (reference value) :- Object, Array, Function.*/

//String
let a = "utkarsh07"
console.log(a)
console.log(typeof a)

//number
const rollNumber = 58
console.log(rollNumber)
console.log(typeof rollNumber)

//Boolean
let isFollowed = 1 //1 =True
console.log(isFollowed)
console.log(typeof isFollowed)

//NULL
let b = null
console.log(b)
console.log(typeof b)

//undefined
let x  //JS types are dynamic
x = 5
x = "UTKARSH"
console.log(x)
console.log(typeof x)

//BigInt
let c = 555n
console.log(c)
console.log(typeof c)

/*2.Non Primitive (reference value) :- Object, Array, Function
Object are written in curly brace {}
example :-*/

const person = {firstName : "Utkarsh", age: 23, height:175 }
console.log(person)

//Array is written in square bracket []
const cars = ["volvo","BMW"]
console.log(cars)
console.log(typeof cars)