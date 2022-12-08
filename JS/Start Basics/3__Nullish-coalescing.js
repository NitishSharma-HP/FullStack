//it is represented by "??""
// it treats null and undefined similarly

let a=null;                         //if a is not null and not undefined then return a else b;
let b=3;
    console.log(a??b);  //..3... as a is null so return b..

let x=1;
let y=2;
console.log(x??y);    //..1.. as a is not null and is defined so return x.

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder


// The important difference between || and ?? is that:

// || returns the first truthy value.
// ?? returns the first defined value.