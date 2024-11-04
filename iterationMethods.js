const numbers = [10, 13, 20, 25, 38, 35, 40];

//Part 1: Filtering
//Write code to perform the following tasks using the filter method:

//1) Create a new array containing numbers that are greater than or equal to 25.

const newArray = numbers.filter(function (arrayElement) {
    return arrayElement >= 25;
});

console.log(newArray);

//2) Create a new array containing numbers that are divisible by 5.

multiplesOfFive = numbers.filter(function (num) {
  return num % 5 === 0;
});
console.log(multiplesOfFive);



//Part 2: Mapping
//Write code to perform the following tasks using the map method:

//3) Create a new array that contains each number squared.

const newArray2 = numbers.map(function (arrayElement) {
   // arrayElement2  = numbers*numbers; غلط لان يشوف الاراي كامل لارم اوضح له اني ابي رقم رقم داخل الاراي 
    return arrayElement*arrayElement; //خليت الاراي براميتر
  });
  console.log(newArray2);

//4) Create a new array that contains each number multiplied by 2.

const newArray3 = numbers.map(function (arrayElement) {
     return arrayElement*2;
  });



/** Part 3: Combining Filtering and Mapping
Combine the filter and map methods to perform the following tasks:

//5) Filter the numbers that are greater than or equal to 20 and then square each of them.**/
const newArray4 = numbers.filter((number)=> number >= 20).map((arrayElement) => arrayElement*arrayElement);

console.log(newArray4);



//6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
const newArray5 = numbers.filter((number)=> number % 5 ===0 ).map((arrayElement) => arrayElement*3);

console.log(newArray5);



//Part 4: Extra not required 🌶️

/*
 logger(array)
  - Accepts an array
  - Logs every element of the array
*/

function logger(array){
   return array.forEach(function (arrayElement) {
    console.log(arrayElement);
  });
}
logger([1,2,3,4]); //for each already will print, so i don't need to put console.log. JUST call the function

/**
  toCelsius(temperatures)
  - Accepts an array of temperatures
    in degrees Fahrenheit
  - Returns an array of temperatures
    in degrees Celsius
 
  The conversion is:
    C = (F - 32) * (5/9)
**/
temperatures = [65, 70, 80, 45, 90];

function toCelsius(temperatures){
  return temperatures.map(function(temp){
     return temp = (temp - 32) * (5/9);
  })
}


console.log(toCelsius(temperatures));

/**
  hottestDays(temperatures, threshhold)
  - Accepts an array of temperatures
  - Accepts a threshhold temperature
  - Returns an array of temperatures
    that exceed the threshhold
**/

function hottestDays(temperatures, threshhold){
  return temperatures.filter(function (threshhold) {
    return threshhold >= 68;
});
}
console.log(hottestDays(temperatures));


/**
logHottestDays(temperatures, threshhold)
 - Accepts an array of temperatures
    IN DEGREES FAHRENHEINT
 - Accepts a threshhold temperature
    IN DEGREES FAHRENHEINT
 - Logs temperatures that exceed the
   threshhold to the console
    IN DEGREES CELSIUS
 
hint: you can combine all previous functions
**/

function logHottestDays(temperatures, threshhold){
  // .map((temp)=> temp = (temp - 32) * (5/9));
  const tempsAboveThreshhold =  hottestDays(temperatures, threshhold);
  const tempsInCelsius = toCelsius(tempsAboveThreshhold);
  return logger(tempsInCelsius);
}


logHottestDays([33,44,55,66,77,88,99], 68);
