// function declaration

// function greet(){
//     console.log("hello there");
// }
// greet();
// greet();
// greet();

// function expression

// const speak = function(){
//     console.log("good day");
// };

// speak();
// speak();
// speak();

// arguments and parameters

// const speak = function(name = "luigi", time = "night"){
//     console.log(`good ${time} ${name}`);
// };

// speak("mario", "morning");
// speak();
// speak("shaun");

// returning values

// const calcArea = function(radius){
//     return 3.14 * radius**2;
    // console.log(area);
    // return area;
// };
// const area = calcArea(5);
// console.log(area);

// const calcVol = function(area);


// arrow function

// const calcArea = radius => 3.14 * radius**2;

// const area = calcArea(5);
// console.log("area is :", area);



// practice changing  functions to arrow

// const greet = function(){
//     return "hello, world";
// };

// greet();
// console.log(greet());

// const greet = () =>  "return hello world" ;
// const result = greet();
// greet();
// console.log(result);

// const bill = function(products, tax){
//     let total = 0
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// console.log(bill([10,15,30], 0.2));

// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };
// console.log(bill([10, 15, 30], 0.2));

// const name = "shaun";

// functions

// const greet = () => "hello world";
// let resultOne = greet();
// console.log(resultOne);

// methods

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

callbacks and foreach