const cat={
    name:'bhuri',
    color:'brown',
    breed:'junglee',

    meow(){   //using shorthand to create fn as property
        console.log(`My ${this.name} don't do Meow Meoww`)
    }
}
cat.meow()//My bhuri don't do Meow Meoww
          // this keyword refers to property 'name' inside the cat object.
//but
const meow2=cat.meow;
meow2()    //My undefined don't do Meow Meoww
           // this keyword's behaviour depends upon how fn is called, here on left side there is no ;cat.; so it is not referring to that object.
          // here it is not refering to cat object, instead it is refering to window object.
