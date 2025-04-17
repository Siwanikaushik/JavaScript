// var c = 300
let a = 300
if(true){
    let a = 10
    const b=20
     var c = 30 //- we do not use var as it will show the value . outside the block
     console.log("inner :",a)
}

// for(let i = 0;i<array.length;i++){
//     const element = array[i];
// }

console.log(a);
// console.log(b);
console.log(c);


function one(){
    const username = "shivani"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
     two()
}
one()

if(true){
    const username = "Shivani"
    if(username == "Shivani"){
        const website = "Youtube"
        console.log(username + website);
        
    }
    // console.log(website) // error beacuse of scope
}
// console.log(username);  // error beacuse of scope


// +++++++++++++ interesting ++++++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1
}

// console.log(addTwo(5)) // gives error because of written syntax
const addTwo = function(num){//may also be called as an expression8
    return num+2
}
console.log(addTwo(5))