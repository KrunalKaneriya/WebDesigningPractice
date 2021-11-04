//*********************************Default Parameters*********************************/
//*We need to take care of the ordering of default parameters because if we have only one param
//*then the function is going to replace it with msg not person so it will display undefined
//*in person variable
// const hello = (msg = "Hey There", person) => {
//     console.log(`${msg} ${person}`);
// }
// const greet = (person,msg = "Good Morning") => {
//     console.log(`${msg} ${person}`)
// }

//****************************Spread With Function Calls *******************************/
//*Spread is new feature of javascript which allows to pass a array or object or string which
//*contain multiple data in one variable to be called diffrently via just using just the variable
//*not via traversing each element

// const nums = [4545,5471,4416461,3213,546,13,16,541,1354300,103,21];
//!console.log(Math.min(nums)); //If we use this then it will display NaN
//*Here the single array is spread out and the function is called with each element of array just
//*like for each
// console.log(Math.min(...nums));
// console.log(Math.max(...nums));
// console.log(..."Hello World");

//****************************Spread With Arrays*******************************/
//This type of spread is used to spread whole array into another array like copy one array into
//another array

const cats = ["Blue","Scott","Rocket"];
const dogs = ["Rusty","Wyatt"];
const allPets = [...cats,...dogs];
const allPets2 = [...dogs,...cats,"Hello World"]


//****************************Spread With Objects*******************************/
//This type of spread is used to copy one object properties to another objects and if two objects have same
//property then the last object to be copied will have the property set to it
const feline = {legs:4,family:"Felidae"};
const canine = {isFurry:true,family:"Caninae"}
const catDog = {...feline,...canine} //Here the order matters and the last object propery will be replaced with old
//We can create a new object with previous object and add some new properties in it
const dataFromForm = {
  email:"prokillerkk@outlook.com",
  password:"krunal123",
  username:"Krunal Kaneria"
}
const newUser = {...dataFromForm,id:2345,isAdmin:false};
