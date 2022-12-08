//do particular task after a time interval for only once

console.log('Hello')   //print Hello immediately
console.log('Bye')     //print Bye immediately
setTimeout(()=>{       //this fn accepts a callback fn and time iterval
    console.log('Still Here!!!') //wait for 3 seconds then print Still Here
},3000)
