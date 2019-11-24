// for loops

// for(let i = 0; i < 5; i++){
// console.log("in loop :", i);
// }
// console.log("loop finished")

// const names = ["shaun", "mario", "luigi"];

// for(let i = 0; i < names.length; i++){
//     // console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }

// while loops

// const names = ["shaun", "mario", "luigi"];
// let i = 0; 

// while(i < 5){
// console.log("in loop: ", i);
// i++;
// }

// const names = ["shaun", "mario", "luigi"];
// let i = 0; 

// while(i < names.length){
// console.log(names[i]);
// i++;
// }

// do while loop
// let i = 5;
// do{
//     console.log("val of i is :", i)
//     i++;
// }while(i < 5);

// let i = 7;
// do{
//     console.log("val of i is :", i)
//     i++;
// }while(i < 5);

// for loop me
// let names = ["max", "fathi", "salma", "ahmed", "salim"];

// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

// if statment
// const age = 25;

// if(age > 20){
//     console.log("you are over 20 years old");
// }

// const ninjas = ["max", "fathi", "salma", "ahmed", "salim"];
// if(ninjas.length > 3){
//     console.log("thats alot of ninjas");
// }
// else
// const password = "paswos";

// if(password.length >= 8){
//     console.log("this password is long enough");
// }else{
//     console.log("password is not long enough");
// }else if(password.length >= 12){
//     console.log("this password is very strong");
// }else{
//     console.log("its not that strong")
// }

// logical opprators or and 

// const password = "p@aaos";

// if(password.length >= 12 && password.includes("@")){
//     console.log("this password is very strong enough");
// }else if(password.length >= 8 || password.includes("@") && password.length > 5){
//     console.log("this password is long enough but not strong");
// }else {
//      console.log("this password is not long enough");
// }


// logical NoT

// let user = false;

// if(!user){
//     console.log("you must be logged on to continue")
// }
// console.log(true);
// console.log(!true);


// break and continue


// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++){

//     if(scores[i]=== 0){
//         continue;
//     }
// console.log("your score:", scores[i]);
// if (scores[i]=== 100){
//     console.log("congrats you won")
//     break;
// }
// }


// switch atatment;

// const grade = "A";

// switch(grade){
// case "A" :
//     console.log("you got an A");
//     break;
// case "B" :
//     console.log("you got an B");
//     break;
// case "C" :
//     console.log("you got an C");
//     break;
// case "D" :
//     console.log("you got an D");
//     break;
// case "E" :
//     console.log("you got an D");
//     break;
// default:
//     console.log("not a valid garde");

// }
// USING IF STATMENTS

// if (grade === "A") {
    
// } else if (grade === "B") {

// } else if (grade === "C") {

// } else if (grade === "D") {

// } else if (grade === "E") {

// } else {

// }

// varibles and block scopes
// global scope 
// let age = 30;
// local scope
// if(true){
//    let age = 40
// console.log("inside 1st code block", age)
// }
// console.log( "outside code block", age)