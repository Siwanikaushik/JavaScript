// Types of Memory : Stack memory,Heap memory
/*
stack memeory => Primitive
heap memory => non primitive
*/
 let myName = "Lakshay"
 let anotherName = myName
  anotherName="Shivani"
 console.log(anotherName);
console.log(myName);

let user={
    email : "skaushik10@hmail.com",
    upi : "290w2@ybl",
}
let user2=user
user2.email="happy@gogle.com"
console.log(user.email)
console.log(user2.email)