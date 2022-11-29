// // check with alert to make sure it works 
// //alert("Hey i am working");

// // 5 primitive data types int bool string null and undefined 

// // let is the best practice to declare variables in js 
// let dave = "awesome";
// let maxNum = 13;
// let onAndOff = false;

// //null 
// //undefined 
// let example;
// // not a great idea to save a undifeinedf value

// console.log(example);

// // this is pre Es6 and you wont see it as often 
// var something = "something";


// //Conditionals 

// if(onAndOff){
//     console.log("I am on!");
// } else {
//     console.log("I am Off!");
// }

// switch (dave) {
//     case 'awesome':
//         console.log("Dave is awesome");
//         break;

//     default:
//         break;
// }

// //Loops 

// for(let i = 0; i <= maxNum; i++){
//     console.log(i);
// }
// //with eqail 12 without 13

// //functions 
// function sayHello() {
//     console.log("Hello");

// }

// sayHello();


// //Function with a pass in parameter
// function SayHelloWithName(name){
//     let result = "hello" + name;
//     console.log("Hello" + name); //incatnation
//     console.log(`Hello ${name}` ); //interperlation 
//     console.log(result);
// }

// //inside 
// SayHelloWithName("Arely");


// //get wierd if your are not careful 
// let studentList = ["dave", "adriamn", "Scoot", "danny"];
// console.log(studentList);
// console.log("---------------------------------");


// //reverseing loop 
// for(let i = 0; i < studentList.length; i++){
//     console.log(studentList[i]);
// }

// console.log("---------------------------------");
// for(let i = studentList.length-1; i >= 0; i--){
//     console.log(studentList[i]);
// }

//this targets the title
let turht = truth;
let title = document.getElementById("title");
let changeTitleBtn = document.getElementById("ChangeTitle");


//this changes the title 
//title.textContent = "I Have changed";

console.log(title);

changeTitleBtn.addEventListener('click', function(e) {
    title.textContent = "I Have changed";
    turht = false;

});

