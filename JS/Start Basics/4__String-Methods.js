
//String properties :- there is only 1 property
//length.

const a="manu";
console.log(a.length); //length is a property, so it does not include () at the end like other methods.

// .............................................Methods........................................................

                                              // Includes
/*
const b="hello sir!!";
if(b.includes("sir")){
    console.log("Yes");  //yes
}else{
    console.log("No");
}
*/

                                          //Starts with , Ends with
/*
const c="hello sir, how are you";
if(c.startsWith("hello")){
    console.log("Yes");  //yes
}else{
    console.log("No");
}

if(c.endsWith("you")){
    console.log("Yes"); //yes
}else{
    console.log("No");
}
*/

                                           //IndexOf
/*                                           
const d="I have a bus of company bus you bus";
const d1=d.indexOf("bus")  
console.log(d1);      //9
const d2=d.indexOf("bus",d1+1); //finding index of second occurence of "bus", passing in a value that's greater than
//the index of the previous occurrence as the second parameter to the method. it wiil become 10( d1= 9, d1+1, =10)
console.log(d2);     //24   

*/
                                            //Slice
/*                                            
       //0123456789  
const e="My name is Don";
console.log(e.slice(3)); //name is Don 
console.log(e.slice(3,8));//name (index 8 is excludive it wont count)
*/
     
                                              //Trim
 //It removes empty spaces from beginning and end of string.                                            
 /*
const f="   manu   ";
console.log(`String is:${f}`);
console.log(`Length is:${f.length}`); //10
f1=f.trim();
console.log(`String after trim:${f1}`);
console.log(`Length after trim:${f1.length}`);
*/