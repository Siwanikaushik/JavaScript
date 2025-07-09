// if

if(true){
    console.log('code is executed');
}
if(false){
    console.log('code is not executed');  
}

const isUserLoggedIn = true
const temperature = 41
if(isUserLoggedIn){
    console.log('statement');
    
}
if(2 == "2"){
    console.log('executed');    
}
if(2 === "2"){
    console.log('executed');    
}
if(temperature<50){
    console.log('temperature is less than 50');
    
}
// operators : <,>,<=,>=,==,!=,,=== ->checks type also

// if else:

if(temperature<40){
    console.log('temperature is less than 40'); 
}
else {
    console.log('tempersture is greater than 40');
    
}

const score = 200
if(score>100){
    const power = "fly"
    console.log(`user power : ${power}`);
}

// shorthand notation

const balance = 1000
if(balance>500) console.log("test");

//nesting

if(balance < 500){
    console.log('less then 500');
    
}else if(balance < 750 ){
    console.log('less than 750');
    
}
else if(balance <900){
    console.log('lesss than 900');
    
}
else{
    console.log('lesss than 1200');

}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard){
    console.log("allowd to buy course");
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log('user looged in succsfully');
}
