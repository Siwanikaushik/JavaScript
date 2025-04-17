// Immediately Invoked Function Expressions(IIFE)
 
 // used to immediatedly call function & to remove the global scope pollution because sometimes it causes problems
(function chai(){
    // namedd iife
    console.log('DB connected');
    
})();

( () => {
    console.log("DB connected two");
})();

( (name) => {
    console.log(`dB connected two ${name}`);
})('hitesh')

