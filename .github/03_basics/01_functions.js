function sayMyName(){
    console.log("L")
    console.log("a")
    console.log("k")
    console.log("s")
    console.log("h")
    console.log("a")
    console.log("y")
}

sayMyName()

function addTwoNumbers(number1 , number2){
    // console.log(number1+number2);
    // let result = number1 + number2
    // return result
    return number1+number2
}
const result = addTwoNumbers(3,4)
 console.log("Result", result)

function loginUserMessage(username = "sam"){
    if(!username){ // => username == undefined
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Lakshay"))
console.log(loginUserMessage())

function calculateCartPrice(val1,val2, ...num1){ // ... also called spread in array & objects ....& ... called rest in functions
    return num1
}

console.log(calculateCartPrice(200,400,500,2000,100))

const user = {
    username:"shivani",
    price:100
}

function handleObject(Anyobject){
    console.log(`username is ${Anyobject.username} and price is ${Anyobject.price}`);
    
}

handleObject(user) // pasing object by first making it
handleObject({  // passing direct object
    username: "Lakshay",
    price: 100000
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100,300,200,3000]))