//EXPLICIT CONVERSION

console.log( Number("   123   ") ); // 123
console.log( Number("123z") );      // NaN (error reading a number at "z")
console.log( Number(true) );        // 1
console.log( Number(false) );       // 0


//AUTOMATIC CONVERSION

console.log("12"/"6");  //2


// BOOLEAN CONVERSION


console.log(Boolean(" ")); // true, (" ") non-empty string give true as boolean value
console.log(Boolean("0"));  //true
console.log(Boolean("")); //false, empty string gives false

//0, null, undefined, NaN, "" gives false...

