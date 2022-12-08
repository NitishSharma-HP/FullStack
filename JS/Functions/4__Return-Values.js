function sum(a,b){
    return a+b;// The directive return can be in any place of the function. When the execution reaches it,
               // the function stops,  and the value is returned to the calling code (assigned to result above).
}
console.log(sum(1,3));


// ....................................................RETURN................................................................


function fn(c,d){
    if(c>d){
        return;  //It is possible to use return without a value. That causes the function to exit immediately.
    }           //  A function with or without an empty return , returns undefined
}

function f(){
 /*return
 (some + long + expression + or + whatever * f(a) + f(b)) this wont work because compiler assumes ";" after
                                                          return because next things are in new line. */

return (  //This works fine, so do this if return statement is not completing in one line..
    some + long + expression
    + or +
    whatever * f(a) + f(b)
    )
}
