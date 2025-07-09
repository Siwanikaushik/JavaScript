const userEmail = 'ha@hitesh.ai'
if (userEmail) {// if string have somethin it is assumed to be true otherwise false
    console.log("got user email");
}else{
    console.log("dont have email");
    
}

//++++++++++++ falsy values +++++++++++++
/*
false
0,-0
BigInt , 0n,  "",null , undefined , NaN
*/



//+++++++++ truthy values ++++++++++++
/*
"0" , "false" , " ", [] , {} , function(){}
*/




// check for empty object & array
const userName = []
if(userName.length==0){
    console.log("array is empty");
    
}


const emptyObj={}

if(Object.keys(emptyObj).length==0){
    console.log("object is empty");
    
}