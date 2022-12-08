//                 ...............................{ CONCAT }.........................

console.log("............concat..................");
const ary=['a','b','c'];
const ary2=['d','e','f'];

const ary3=ary.concat(ary2);  //concat elements of ary and ary2 and creates a new array ary3.
console.log(ary3);           //a, b, c, d, e, f

//             ..................................{ INCLUDES }...............................

console.log("............Includes..................");
const ary4=['a','b','c','d','e'];
if(ary4.includes('c')){      //if ary4 includes character 'c' then this function will return true. And print "Yes".
    console.log("Yes");  //yes
}else{
    console.log("No");
}

//            ...................................{ INDEXOF }...................................

console.log("............IndexOf..................");
// if element present in array then return index of that element if not present then return -1
const ary5=['a','b','c','d'];
console.log(ary5.indexOf('b')); // 1

//          .......................................{ Reverse }......................................

console.log("............Reverse..................");

// This method works "inplace" means changes the original Array.

const ary6=['a','b','c'];
console.log(ary6.reverse());  // c, b, a 

//               ..............................{ SLICE }...........................................

console.log("............Slice..................");
const ary7=['a','b','c','d','e','f'];
console.log(ary7.slice(2));        // 'c', d', 'e', 'f'
console.log(ary7.slice(2,5));      // 'c', 'd', 'e'  last index is explicit.(which means it will not be included.)
console.log(ary7.slice(-3));       // 'd', 'e', 'f'  (last 3 elements)

//             .................................{ SPLICE }.................................................

console.log("............Splice..................");
const ary8=['a','b','d','e'];
//ary8.splice(2 , 0 ,'c');   //Syntax:-> (start index , no. of elements to delete, element to be added)
//console.log(ary8);

ary8.splice(2,2,'k');  //deletes 2 elements starting from index 2(which means deletes 
                       //element at index 2 and index 3 and place 'k' at position 2)
console.log(ary8);

//             .................................{ SORT }.................................................

//This method works as utf-16 (which means character wise)
//to make it work acc to numbers, we use functions which i will learn later on..

console.log("............Sort..................");
let scores=[1,4,6,-2,-6,-2,8,29,449,32];
scores.sort();
console.log(scores);