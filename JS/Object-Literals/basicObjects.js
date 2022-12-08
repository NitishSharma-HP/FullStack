//Objects are collections of properties.
//Properties are key-value pair.
//Rather than accessing data with indexes we use custom keys.

//decalring object fitBitData.....
const fitBitData= {
      totalSteps  :  10000,
      totalMiles  :   12,
      avgCalorieBurn: 2000
}  //accessing properties:- method-1 Using '.' 
console.log(`Total steps taken : ${fitBitData.totalSteps}`);
console.log(`Total Calories Burned : ${fitBitData.avgCalorieBurn}`);
console.log(`Total Miles travelled : ${fitBitData.totalMiles}`);

//method-2 Using '[]'
console.log(fitBitData['totalSteps']);  //10000

//this method is helpful when want to evaluate something then use that evaluated expression as key. e.g. below...

console.log(fitBitData['total'+'Steps']); //10000 (1st evaluate and concate the strings total and steps, 
                                           // then find at 'totalSteps' location).