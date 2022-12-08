//map function working in JS..

//array with 5 elements
let ary=[1,2,3,4,5]; 
//map method accepts a function as an argument.
const map1=ary.map((x)=>x*2);
//map function goes to each element in array..
//and tranform the element according to.. 
//what is specified in the function.
console.log(map1);
//map function is defined as :
//multiply the element with '2'.
// which gives
//output:2,,4,6,8,10.