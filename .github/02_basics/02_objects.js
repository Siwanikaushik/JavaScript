// singleton
// object.create - constructor
// object literals

const mySym = Symbol("key1")


const jsUser = {
    name: "shivani",
    "full name": "Shiani kaushik",
    //mySym:"mykey1",// not used as symbol , as the datatype is not symbol
    age: 18,
    [mySym]:"mykey1",//symbol
    location: " Delhi",
    email: "siwani@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["monday","saturday"]

}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
// console.log(jsUser.mySym)
// console.log(typeof jsUser.mySym)
console.log(jsUser[mySym])

jsUser.email = "shiavni@gmail.com"
console.log(jsUser['email']);

// Object.freeze(jsUser) // it doesnot allow any modifications
jsUser.email = "shiavni@microsoft.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}

console.log(jsUser.greeting());
jsUser.greetingTwo = function(){
    console.log(`hello js user,${this.name}`);
}
console.log(jsUser.greetingTwo());

const tinderUser = new Object() // singleton object
// const tinderuser = {} - non singleton
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser)

const regularUser ={
    email: "some@gmail.com",
    fullname: {
        userfullname :{
            firstname : "lakshay",
            lastname : "kumar"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
//const obj3 = {obj1 , obj2}
const obj4 = {5 :"a", 6 :"b"}

//const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 ={...obj1, ...obj2}
console.log(obj3)

const users = [
    {
        id : 1,
        email : "shbak@gmail.com",

    },
    {
        fruit:"apple"
    },
]
users[1].email;
console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('islogged'))