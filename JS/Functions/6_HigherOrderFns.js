// A “higher-order function” is a function that accepts functions as parameters and/or returns a function.

function calculation(Sum){ //this fn accepting a parameter which is also a fn.
    let x=5
    let y=10;
    Sum(x,y) //here calling the passed parameter(Sum ) as fn call so there must be a fn passed as parameter to calculation()..

}
function addition(x,y){ //fn does additon of two nos..
    console.log(x+y)
}
calculation(addition)