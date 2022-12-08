// creates a new array with all elements that pass the test provided by implemented function

const n=[1,2,3,4,5,6,7,8];
const odd=n.filter((num)=>num%2 != 0)
console.log(odd) //[ 1, 3, 5, 7 ]

//.........................................................................
const movies=[
    {
        title:'Bahubali',
        score:91
    },
    {
        title:'Avatar',
        score:93
    },
    {
        title:'Drishyam',
        score:90
    },
    {
        title:'Bachan Pandey',
        score:58
    },
    {
        title:'Deshdrohi',
        score:20
    },
]
console.log('.....................................................')

const goodMovies=movies.filter((movie)=>movie.score >= 90) //returns array of objects with movie rating >= 90 
console.log(goodMovies)  
//output: 
// [
//     { title: 'Bahubali', score: 91 },
//     { title: 'Avatar', score: 93 },
//     { title: 'Drishyam', score: 90 }
//   ]

console.log('............................................................')
//i don't want whole object , i only want title of movies 
const goodTitles=movies.filter((movie)=> movie.score >= 90).map((movie)=> movie.title)
console.log(goodTitles)

//output: [ 'Bahubali', 'Avatar', 'Drishyam' ]
