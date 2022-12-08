let fruits = ["Apple", "Orange", "Plum"];

fruits[fruits.length-1]="Papaya";
console.log( fruits[fruits.length-1] ); // Plum, in this way we need to find length of array

//
fruits[fruits.length]="Papaya";
console.log(fruits[fruits.length] ); 
//
fruits.at[2]="Mango";//using "at"
console.log(fruits[2]); 

