// in js functions can be stored in variable
//and also can be used as object's properties..

//creating my own method..
const myMath={                 //object myMath
    Multiply: function(x,y){   //Property Multiply with function as its value.
        return x*y;
    },
    Add: function(x,y){
        return x+y;
    },
    Cube: function(x){
        return x**3;
    },
    Square(x){            //short hand 
        return x**2;
    }
}
console.log(myMath.Add(3,5));
console.log(myMath.Cube(4));
console.log(myMath.Square(4));