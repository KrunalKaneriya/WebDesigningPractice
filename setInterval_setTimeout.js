//*setTimeout Function
//*Function which will execute only one time but after the specified delay

// console.log("Hello World....");
// setTimeout(() => {
//     console.log("Heyy.. How Are You...")
// },2000)
// console.log("Goodbye");

//*setInterval Function
//*Function which will execute automatically and it will continue to run after some delay specified

// setInterval(() => {
//     console.log(Math.random())
// },1500)

//*This function will not stop automatically and we need to save the function return value and we can use clearInterval function to stop the interval

const id = setInterval(() => {
    console.log(Math.random())
},1500)