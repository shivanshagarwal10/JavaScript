// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // Named IIFE
    console.log('DB CONNECTED');
})();

// () function ki defination () Exection
/* It is due to pollution the global scope - global scope declaration to 
remove it */

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('shivansh')
