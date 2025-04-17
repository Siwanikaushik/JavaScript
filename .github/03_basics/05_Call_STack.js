// JavaScript Execution Context
// javascript is single threaded


{ } // golbal execution context - this
// functional execution context 
// eval execution context

{} // -> memeroy CREATION PHASE => only memeory is allocated no execution is performed
// ->  Execution phase => execution is done

let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let tottal = num1+num2
    return total
}
let result = addNum(val1,val2)
let result2= addNum(10,2)

// +++++++ steps of this code execution +++++++
// step 1 => global execution/environment ==> this
// step2 => memory creation phase  :
/* val1 -> undefined
val2 -> undefined
addNum -> definition
result -> undefined
result2 -> undefined
*/

// step3 => execution phase : 


/* val1 -> 10
val2-> 5

addNum -> new EXECUTION CONTEXT => NEW VARIABLE ENVIRONMENT  + EXECUTION THREAD 

 => 1) memeory phase -> val1 ->undefined
 val2-> undefined
 total -> undefined 
 => 2) execution phase
num1 -.10
num2-> 5
total -> 15 => returned in global execution context
*/ // => after all this work the addNum exceutional context get deleted
// result1 -> 15
// result2 -> now the same thing get repeadted for this

// ++++++++ CALL STACK ++++++++
/* 
         one()-> comes in stack ->execute & go out
         global execution
*/

/*  for mutliple function call within one
Here LIFO concept works:


        three()
        two()
        one()
        global execution
*/