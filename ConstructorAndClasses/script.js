// function Color (r , g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// Color.prototype.rgb = function() {
//     const {r,g,b} = this;
//     return `rgb(${r},${g},${b})`;
// }

// Color.prototype.rgba = function(a = 1.0) {
//     return `rgba{${this.r}, ${this.g}, ${this.b} , ${a}}`;
// }

// class Color {
//     constructor(r,g,b,name) {
//         this.r = r;
//         this.g = g;
//         this.b = b;
//         this.name = name;
//     }
//     innerRGB() {
//         const{r,g,b} = this;
//         return `${r},${g},${b}`;
//     }
//     rgb() {
//         return `rgb(${this.innerRGB()})`;
//     }
//     greet() {
//         return `Hello ${this.name}`
//     }

//     rgba(a=1.0) {
//         return `rgba(${this.innerRGB()},${a})`
//     }

//     hex() {
//         const {r,g,b} = this;
//         return (
//             '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//         );
//     }
// }

// let c1 = new Color(43,65,67,'Green');

// class Animal {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }

//     eat() {
//         return `${this.name } is Eating..`;
//     }
// }


// class Cat extends Animal{
//     constructor(name,age,catType = "Lazy") {
//         super(name,age);
//         this.catType = catType;
//     }
//     meow() {
//         return `Meowwwww`;
//     }

// }

// class Dog extends Animal{

//     bark() {
//         return `Wofffff`;
//     }
// }

document.querySelector('body').addEventListener('mouseenter',(evt) => {
    console.log(evt.target);
    console.log(this);
}) 