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
const bigNumber = 43658708965432987564534n
console.log(typeof bigNumber)
