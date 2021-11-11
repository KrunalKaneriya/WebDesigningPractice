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
//It is mainly used to copy one array to other array
//
// const cats = ["Blue","Scott","Rocket"];
// const dogs = ["Rusty","Wyatt"];
// const allPets = [...cats,...dogs];
// const allPets2 = [...dogs,...cats,"Hello World"]


//****************************Spread With Objects*******************************/
//This type of spread is used to copy one object properties to another objects and if two objects have same
//property then the last object to be copied will have the property set to it
// const feline = {legs:4,family:"Felidae"};
// const canine = {isFurry:true,family:"Caninae"}
// const catDog = {...feline,...canine} //Here the order matters and the last object propery will be replaced with old
//We can create a new object with previous object and add some new properties in it
// const dataFromForm = {
//   email:"prokillerkk@outlook.com",
//   password:"krunal123",
//   username:"Krunal Kaneria"
// }
// const newUser = {...dataFromForm,id:2345,isAdmin:false};

//************************************ Rest ***************************************/
/*For Some reason if you want to call multiple arguments in one line and the rest will make array of the
arguments and after that call the function like an array*/
//It's like collect the rest of arguments in a single element which will become an Array
//Rest works when there is no array defined previously and we are giving another name in parameter which will
//the array name
// sum = (...nums) => (console.log(nums));

// function anotherSum(...num) {
//   return num.reduce((total,el) => total+el);
// }

// const raceResults = (gold,silver,...everyoneELse) => {
//   console.log(`Gold Medal Goes to ${gold}`);
//   console.log(`Silver Medal Goes to ${silver}`);
//   console.log(`And Thanks To ${everyoneELse}`);
// }

//************************************ Destructuring Arrays ***************************************/
/*If we want to single out an element from array and make a variable from it then we can use old syntax like
let gold = score[0] or we can use new syntax which is called Destructuring of arrays*/
// const score = [3345,2345,2311,2130,1023,908,789,654];
/*We can also do like this
let gold = score[0];
let silver = score[1];
let bronze = score[2];
*/
//Or follow the new syntax
// const [gold,silver,bronze] = score;
//And we can also use rest with this
// const [g,s,b,...everyoneElse] = score; //Here the rest is used to collect remaining arguments
// console.log(...everyoneElse); //And here we are printing the array with spread

//************************************ Destructuring Objects ***************************************/
/*We can also destructure objects if we want certain property of objects to be saved into a variable and we can also 
give default parameters and we can also give another name to property of the object which we want to copy */

const user = {
    email:"harvey@gmail.com",
    password:"hellowrodlse",
    firstName:"Harvey",
    lastName:"Milk",
    born:1930,
    died:1978,
    city:"San Francisco",
    state:"California",
    bio:"Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors"
}

const user2 = {
    email:"Stacy@gmail.com",
    firstName:"Stacy",
    lastName:"Gonsalvez",
    born:1987,
    city:"Tulsa",
    state:"Oklahoma"
}

//If we want single property like lastname in another var then we can use like this
//By default we can only create variable with the same name as the property of the object has it but we can also give another
// name to variable
// const {lastName,bio} = user;
// const {firstName} = user;

//Here we can give another name to variable of property when destructuring the object
// const {born:birthYear,died:deathYear} = user

//We can also give default value to variables if the property is not found
const {died:deathYear = "N/A",bio = "This is a Woman"} = user2;

//************************************ Destructuring Parameters ***************************************/
/*We can also destructure parameters of objects when we are calling a function */
//And the destructuring parameters of parameters is same as of objects but we need to specify {} in arguments
//and write the syntax of object destructuring

function fullName({firstName,lastName}) {
    console.log(`${firstName} ${lastName}`);
}

let movies = [
    {
        name:"Amadeus",
        score:90,
        year:2000
    },

    {
        name:"Divine",
        score:50,
        year:2012,
    },

    {
        name:"Venom",
        score:76,
        year:2018
    },

    {
        name:"Dr Strange",
        score:95,
        year:2020
    },

    {
        name:"Avengers Endgame",
        score:99,
        year:2021
    },

    {
        name:"Parasite",
        score:85,
        year:2019
    },

    {
        name:"Alien",
        score:90,
        year:1980
    }
]

//This is the old syntax
const greatMovies = movies.filter( (movie) => movie.score>=90);
//This is the new Syntax with default property names
const greatMovies2 = movies.filter( ({score}) => score>=90);
//This is the new Syntax with given property names
const greatMovies3 = movies.filter ( ({score:GivenScore}) => GivenScore>=90)

//Another Example 
const listMovies = movies.map(({name,score,year}) => {
    console.log(`The Movie Name is ${name} And The Score is ${score} And the Released Year is ${year}`)
})