console.log(1=='1'); //true,because "==" doesn't care about type of data, in this case char 1 is converted to number 1. 
console.log(1==='1'); //false, "===" strictly checks type of data, in this case 1 is number and 1 is char so they are not same.

console.log(0 == false);  //true
console.log(0 === false); //false


console.log(0 != false);  //false
console.log(0 !== false); //true
