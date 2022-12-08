// There are 8 basic data types in JavaScript:-

// NUMBER for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
// BIGINT is for integer numbers of arbitrary length.
// STRING for strings. A string may have zero or more characters, there’s no separate single-character type.
// BOOLEAN for true/false.
// NULL for unknown values – a standalone type that has a single value null.
// UNDEFINED for unassigned values – a standalone type that has a single value undefined.
// OBJECT for more complex data structures.
// SYMBOL for unique identifiers.

// ........................................................................................
var x = "hi"; // for global variables
let x = "hi"; // for block-scoped variables
const x = "hi"; // for block-scoped variables which can not be reassigned
// ........................................................................................


"use strict"; // to use modern js, this must be placed at top 
let admin;  //declare a variabel admin
let name;    //declare a variabel name
name="john"; //assign value to name
admin=name;  //copy value of name to admin

console.log(admin); //printing value of admin

///.......................................... changing values of variables........................................
const myName="manu";
// myName="kanu";   //const variable cant be reassigned
name="john wick";   //let variables can be reassigned

console.log(myName);
console.log(name);

/// ...............................one variable can be reassigned to another type of data........................
let var1=12; //var1 holds interger type
var1="manu"; //now var1 holds string type
             //for this reason js is dynamically typed language...
console.log(var1);

///................................variables..........................................................
//BigInt size= 2^53-1 to -2^53-1
const bigInt=12234348953934893n; //n should be placed at end of BigInt.


