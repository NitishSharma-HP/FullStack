// function name(parameter1, parameter2, ... parameterN) {
//     ...body...
//   }

function showMessage(){                 //function declaration
    console.log("hlo dear swati...");
}

showMessage();  //function call

// ...............................................................................................................

let name="manu";
function chngName(){
    name="nitish";
    console.log(name);
}
console.log(name);   //before function call "manu".
chngName();          //function call "nitish".
console.log(name); //after function call "nitish".

// .................................................................................................................

let userName = 'John'; //global variable

function sm() {
  let userName = "Bob"; // declare a local variable

 console.log(userName); // Bob
  
}
// the function will create and use its own userName
sm();
