//  conditional operator(?) work as if-statement :->
// syntax: let result = condition ? value1 : value2;
// if condition is true then value 1 will return else return value2

let a=5
let b=3;
let res=(b<a)? true : false;  //return true
// .................................................................................................

// Multiple ? operators (can be used as if-elseif)

let x=10;
let y=12;
let z=7;

//          if(T)=>print         elseif(T)=>print     elseif(T)=>print     else=>print
let result=(x>z)? "hello dear" : (x<y)? "bye dear" : (x>y)? "hai ee ni": "ha ha ha"; //print hello dear because 1st cond is true.
console.log(result);