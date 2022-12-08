//in js there is only string type no char type is there...string can be a single character,no character or multiple chars

/* Three types of quotes :-
"Hello"
'Hello'
`Hello`
*/
let name="hello";
let name2='hello';
let name3=`hello`;
console.log(name);   //hello
console.log(name2);  //hello
console.log(name3);  //hello

// ...............................................................................................................

// ` ` backticks can be use to embed expressions and variables to string by wrapping them in ${....}

let a="manu";
//embedding a variable :-
console.log(`hello,${a}`);  //hello,manu
//embedding a expression :-
console.log(`the result is ${1+2}`);
//other way to do this
let sum=1+2;
console.log("the result is "+sum);
