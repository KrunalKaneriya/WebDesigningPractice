// function rant(message) {
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
// }

// function isSnakeEyes(num1,num2) {
//     if(num1 === 1 && num2 === 1) {
//         console.log("Snake Eyes");
//     }
//     else {
//         console.log("Not Snake Eyes");
//     }
// }

// function capitalize(word) {
//     let singleChar = word[0];
//     singleChar = singleChar.toUpperCase();
//     remainingWord = word.slice(1);
//     console.log(singleChar + remainingWord);
//     return singleChar + remainingWord;
// }

// const daysArray  = {
//     1:"Monday",
//     2:"Tuesday",
//     3:"Wednesday",
//     4:"Thursday",
//     5:"Friday",
//     6:"Saturday",
//     7:"Sunday"
// }

// function returnDay(number) {
//     if(number>7 || number<1) {
//         return null;
//     }
//     else {
//         return daysArray[number];
//     }
// }

// function lastElement(array) {
//     if(array.length ===0 ) {
//         return null;
//     }
//     else {
//         return array[array.length-1];
//     }
// }

// function sumArray(array) {
//     let total = 0;
//     if (array.length===0) {
//         return null;
//     }
//     else {
//         for (let number of array) {
//             total+=number;

//         }
//         return total;
//     }
// }

//Higher Order Functions(Functions that return or pass a function as argument)

// function callTenTimes(func) {
//     for(let i=0;i<10;i++) {
//         func();
//     }
// }

// function func() {
//     console.log(Math.floor(Math.random()*6) + 1);
// }

// callTenTimes(func); //Notice that we are not using () here because it will call the function and the 
//return value will be passed to callTenTimes

//Higher Order Function (Function that return a new function)
// function makeMystery() {
//     const rand = Math.random();
//     if(rand>0.5) {
//         return function() {
//         console.log("Congrats you are a good function....");
//         console.log("You win a million dollars");
//         }
//     }
//     else {
//         return function() {
//         alert("You are a bad function..");
//         alert("Stop try to close this window");
//         alert("Stop try to close this window");
//         alert("Stop try to close this window");
//         alert("Stop try to close this window");
//         }

//     }
// }

//This function is returning a brand new usable function
// function makeBetweenFunc(min,max) {
//     return function(num) {
//         return num>=min && num<=max;
//     }
// }

//Creating Methods in Objects
// const myMath = {

    //We can define a method like this
    // area : function (num) { 
    //     console.log(`The Area of Object is ${num*num}`);
    //     return num*num;
    // },

    //or like this also and this is a newer shorthand version
//     perimeter(num) {
//         console.log(`The Perimeter of Object is ${num*4}`);
//     }
// }