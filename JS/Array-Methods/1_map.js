// creates a new array with results of calling a callback on every element of array.

const a=['manu','kanu','nanu'];

//using normal fnctional approach
const ma= a.map(function(num){
 return num.toUpperCase();
})

//using arrow fn
const mma=a.map((num)=>num.toLowerCase());

console.log(a)   //['manu','kanu','nanu']
console.log(ma)  //['MANU','KANU','NANU']
console.log(mma) //['manu','kanu','nanu']

//...............................................................................................................................................................

console.log('............................................................................')

const movies =[
    {
        title:'avatar',
        score:94
    },
    {
        title:'bahubali',
        score:93
    },
    {
        title:'drishyam',
        score:91
    }
];
//now i only want movie titles in diff array
const titles=movies.map(function(movie){
    return movie.title.toUpperCase();
})
console.log(titles)        //[ 'AVATAR', 'BAHUBALI', 'DRISHYAM' ]
