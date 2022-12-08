// We can specify the so-called “default” (to use if omitted) value for a parameter in
//  the function declaration, using =>

function showMessage(from, text = "no text given") {
  console.log( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
// Now if the text parameter is not passed, it will get the value "no text given"

// Here "no text given" is a string, but it can be a more complex expression, 
// which is only evaluated and assigned if the parameter is missing. So, this is also possible:

function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}