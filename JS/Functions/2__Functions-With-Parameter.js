function message(source,destination){
    console.log("the message has come from "+source+" and message is send to "+destination);
}
message("Vashist","Swati");

// .................................................................................................................

function showMessage(from, text) {

    from = '*' + from + '*'; // make "from" look nicer
  
    console.log( from + ': ' + text );
  }
  
  let from = "Ann";
  
  showMessage(from, "Hello"); // *Ann*: Hello
  
  // the value of "from" is the same, the function modified a local copy
  console.log( from ); // Ann
  

//   ................................................................................................................

// If a function is called, but an argument is not provided, then the corresponding value becomes undefined.
// For instance, the aforementioned function showMessage(from, text) can be called with a single argument:

showMessage("Ann");

// That’s not an error. Such a call would output "*Ann*: undefined". 
// As the value for text isn’t passed, it becomes undefined.


// ...................................................................................................................

// Values passed to a function as parameters are copied to its local variables.