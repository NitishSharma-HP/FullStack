//now a days for each is not used much , instead for of is used

const nums=[2,4,5,6,8];

//simple approach
function print(n){
    console.log(n);
}
nums.forEach(print); // 2,4,5,6,8

//with anonymous fn
nums.forEach(function(n){
    if(n%2==0)
    console.log(n);  //2,4,6,8
})