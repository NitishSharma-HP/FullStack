//these methods works with starting of the array

let ary=["manu","kanu","Nanu"];
ary.shift();                     //extract 1st element remove it
console.log(ary);

 ary.unshift("Tanu");           //add element at beginning of the array
 console.log(ary);


 /////////////////////////////////////////////////////////////////////////////////
 let items=["math","chem","phy"];
 items.push("history","geography");   //add these at end of the array
 items.unshift("hindi","english");   //add these at starting of the array
 console.log(items);


 //Methods push/pop run fast, while shift/unshift are slow.

