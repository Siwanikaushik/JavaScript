// primitive - call by value
// 7 types:
/*
1) string
2) Number
3) Boolean
4) Null
5) Undefined
6) Symbol => for making any value unique
7) BigINT
*/

// Reference(Non-primitive) -call by reference
/*
Array , objects , functions , 
*/

const value=Symbol("123")
const id=Symbol("123")
console.log(value == id)
const bigNumber = 43658n
console.log(typeof bigNumber)
const outside = null //object

//arrays
const hero=["shaktiman","naagraj","doga"];
//objects
let myobj ={
    name :"lakshay",
    age : 33,
}
// Function
const myfunction= function(){
    console.log("Hello World.")
}
 console.log(typeof outside)
 console.log(typeof hero)
 console.log(typeof myobj)
 console.log(typeof myfunction)