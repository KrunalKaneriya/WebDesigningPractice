//*************************For Each (method accepts a function as argument and it will call the function everytime with new value of array)**************
    //*Eg: arr = [1,2];. So 1 will be passed to func and after that 2 will be passed.
// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// function print(element) {
//     console.log(element);
// }
// numbers.forEach(print);
// numbers.forEach(function( el ) {
//     console.log(el);
// })

// let movies = [
//     {
//     name:"Amadeus",
//     score:90
//     },

//     {
//     name:"Divine",
//     score:50
//     },

//     {
//     name:"Venom",
//     score:76
//     },

//     {
//     name:"Dr Strange",
//     score:95
//     },

//     {
//     name:"Avengers Endgame",
//     score:99
//     }
// ]

// movies.forEach(function(movie) {
//     console.log(`Movie: ${movie.name} Score: ${movie.score}/100`);
// })

//********************************************Map*******************************************
//*(This returns a new array based upon the function which was passed in as parameter in map method in array)

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// const names = ['krunal','vidhi','yashvi','vishal','mitesh','dhanraj','chirag'];
// doubles = numbers.map(function(num) {
//     return num * num;
// }) 

    //Implicit Return Function
// const doubles = numbers.map(number => (
//     number*number
// ))


    //*This is example of map in which every name is capitalized 
// const capitalizedNames = names.map(function (name) {
//     let firstLetter = name[0];
//     let remainingLetter = name.slice(1);
//     let capitalLetter = firstLetter.toUpperCase();
//     let fullName = capitalLetter + remainingLetter;
//     return fullName;
// })

//* **********************************Arrow Functions*************************************

    //*Normal Function
// const add = function (x,y) {
//     return x+y;
// }

    //*Arrow Function
// const add = (x,y) => {
//     return x+y;
// }

    //*If we have only one parameter then we can also remove the brackets but it will work on only one parameter
// const square = num => {
//     return num*num;
// }

// const helloworld = () => {
//     console.log("Hello World\n".repeat(5));
// }

    //*Implicit Returns of Arrow Functions (This function only works when there is one line to return)
// const rollDie = () => (
//     Math.floor(Math.random() * 6) + 1
// )

// const uppercase = (name) => (
//     console.log(name.toUpperCase())
// )

    //*Using arrow functions in array callback functions
// let movies = [
//         {
//         name:"Amadeus",
//         score:90
//         },
    
//         {
//         name:"Divine",
//         score:50
//         },
    
//         {
//         name:"Venom",
//         score:76
//         },
    
//         {
//         name:"Dr Strange",
//         score:95
//         },
    
//         {
//         name:"Avengers Endgame",
//         score:99
//         }
//     ]

    //*Arrow Function in array callback function with implicit return
// const newMovies = movies.map( movie => (
//     console.log(`The Movie Name is ${movie.name} - The Score is ${movie.score/10}`)
// ))

//*Filter Function
//*Filter function accepts a callback function and it has some condition in it and if that condition is satisfied then the element is added into new array otherwise it is discarded and it is useful in filtering options..

// let movies = [
//             {
//                 name:"Amadeus",
//                 score:90,
//                 year:2000
//             },
        
//             {
//                 name:"Divine",
//                 score:50,
//                 year:2012,
//             },
        
//             {
//                 name:"Venom",
//                 score:76,
//                 year:2018
//             },
        
//             {
//                 name:"Dr Strange",
//                 score:95,
//                 year:2020
//             },
        
//             {
//                 name:"Avengers Endgame",
//                 score:99,
//                 year:2021
//             },

//             {
//                 name:"Parasite",
//                 score:85,
//                 year:2019
//             },

//             {
//                 name:"Alien",
//                 score:90,
//                 year:1980
//             }


//         ]

// const newMovies = movies.filter(movie => movie.year>2000)

// const goodMovies = movies.filter((movie) => {
//     return movie.score>80
// })

// const badMovies = movies.filter(movie => (
//     movie.score<70
// ))

    //*We often combine the filter and map functions
    //*If we want the names of the filtered movies then we can use it

// const newMovies = movies.filter(movie => movie.year>2010).map(movie => movie.name)

// userNames = ['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan'];
// validUserNames = userNames.filter(name => name.length<=10)

//*************************************Some and Every Method **************************************/
//*Some method returns boolean value and it is used to check that if one array passes the condition and if it passes then the some method returns true

const score = [100,80,65,85,66,45,50,84,71,69,82,74];

score.some(number => number>=99); //It returns true because 100 is > 99

score.every(number => number>=15) //It returns false because there are num < 50

//***************************************Reduce Method *************************************** */
//*This method contains two parameters previous value and current value and we need to write the
//*function which will return one value because reduce method only returns one value from whole
//*array

let minfunc = [0.01,445.45,1154.45,12.1,65.32,0.54,0.82,1.21,0.21,1.2];

const reduceTotal = minfunc.reduce((prevValue,currValue) => {
    let total = prevValue+currValue;
    return total;
})

const minvalue = minfunc.reduce( (minValue,currValue) => {
    if(currValue<minValue) {
        return currValue;
    }
    return minValue

})

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

let bestmovie = movies.reduce((bestmov,currmov) => {
    if(currmov.score > bestmov.score) {
        return currmov
    }
    return bestmov
})