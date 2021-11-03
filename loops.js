// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

//For Loops
// for(let i=0;i<=10;i++) {
//     console.log(i)
// }

// for(let j=100;j>=0;j-=10) {
//     console.log(j);
// }

// for(let i=25;i>=0;i-=5) {
//     console.log(i);
// }

let people = ["Scooby","Velma","Daphene","Shaggy","Fred"];
// for(let i=0;i<people.length;i++) {
//     console.log(people[i].toUpperCase())
// }

//Nested Array Iterating
let nestedArray = [
    ["Krunal","Vishal","Dhanraj"],
    ["Chirag","Pruthvi","Mitesh"],
    ["Milan","Sanskar","Ronak"],
    ["Jay","Meet","Dixit"],
    ["Vidhi","Janvi","Prachi"],
    ["Shreya","Vaishali","Yesha"]
];

console.log(`The Length of Nested Array is ${nestedArray.length}`);

for(let i=0;i<nestedArray.length;i++) {
    let row = nestedArray[i];
    console.log(`The Row is #${i+1}`);
    for(let j=0;j<row.length;j++) {
        console.log(`The Name is ${row[j]}`);
    }
}

