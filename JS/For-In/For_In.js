//for...in can be use to iterate over object literals.

const scores={
    manu: 30,
    kanu: 50,
    nanu: 49,
    tanu: 94
};
for(let person in scores){
    console.log(person); //only prints the keys :- manu, kanu, nanu, tanu
}

console.log('...............................................................................');

for(let persn in scores){
    
    console.log(`${persn} scored ${scores[persn]}`);  //prints keys as well as value...
}


console.log('........................inbuilt object methods.................................');
console.log(Object.keys(scores)); //keys
console.log(Object.values(scores)); //values
console.log(Object.entries(scores)); //key value pairs
