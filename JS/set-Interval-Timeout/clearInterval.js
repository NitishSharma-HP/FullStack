//setInterval will go on till not stopped 
//so to stop setInterval clearInterval() is used
//setInterval actually return an id everytime it is called

const id = setInterval(()=>{       //storing the id setInterval will return
    console.log('Hello') //wait for 3 seconds then print Hello, again wait 3 sec then print Hello so on...
},2000)

setTimeout(()=>{  //now after 6.3 seconds setTimeout is called
    clearInterval(id) //it will stop the setInterval
    console.log('stopped')
},6030)


// output :
// Hello
// Hello
// Hello
// stopped