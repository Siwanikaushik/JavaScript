const user = {
    username : "lakshay",
    price : 99999999999,
    welcomeMessage:function(){
        console.log(`${this.username} ,welcome to  website`) // this is used for current context
        console.log(this)
    }

}
user.welcomeMessage()
user.username = "Shivani"
user.welcomeMessage()
console.log(this)

function chai(){
    let username = " lakshay"
    console.log(this);
}
chai()

const code = function(){
    let username = " lakshay"
    console.log(this.username);// do not know in case of fnctions
}
code()

// arrow function

const arrow = () => {
    let username = " lakshay"
    console.log(this.username);// do not know in case of fnctions
    console.log(this) // this is also empty in case of arrow function
}

const addTwo = (num1 , num2) => {
    return num1 +num2
}
console.log(addTwo(3,4))

// implicit return : 
const subTwo = (num1,num2) => (num1-num2)
console.log(subTwo(5,1))

const object = (num1,num2) => ({username : "shivani"})

console.log(object(1,2))

// const myArray = [2,4,6,8,9]
// myArray.forEach(()=> ("happy"))