// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const randomNumber = Math.floor(Math.random * 3000);

//         setTimeout(() => {
//             if(randomNumber<1500) {
//                 resolve(url);
//             }
//             else {
//                 reject(url);
//             }
//         },1000)    
//     })

// }

// const sample = () => {
//     return new Promise((resolve,reject) => {

//     })
// }


// fakeRequest("/dogs/1")
// .then((url) => {
//     console.log("Done with Request");
//     console.log(`The Url was ${url}`);
// })
// .catch((url) => {
//     console.log("Failed Promise!!!");
//     console.log(`The Url was ${url}`);

// })

// const delayColorChange = (color,delay) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve(`Function ${color} Called`);
//         },delay);
        
//     })
// }

// delayColorChange("red",1000).then((message) => {
//     console.log(message)
//     return delayColorChange("yellow",1000)

// }).then((msg) => {
//     return delayColorChange("magenta",1000)
//     console.log(msg)
// })

// delayColorChange("red",1000)
// .then((msg) => {
//     delayColorChange('yellow',1000)
//     console.log(msg)
// })
// .then((msg) => {
//     delayColorChange('magenta',1000); 
//     console.log(msg)
// })
// .then((msg) => {delayColorChange('violet',1000);console.log(msg)})
// .then((msg) => {delayColorChange('pink',1000);console.log(msg)})
// .then((msg) => {delayColorChange('green',1000);console.log(msg)})
// .then((msg) => {delayColorChange('purple',1000);console.log(msg)})

// const login = async (username) => {
//     if(username === "Krunal") ret-urn "Logged In";
//     if(!username) throw ("Required Username");
    
// }

// login("Kruna").then(msg => {
//     console.log(msg);
// }).catch(msg => {
//     console.log(msg);
// })

// const test = () => {
//     return new Promise((resolve,reject) => {
//         let error = true;

//         setTimeout(() => {
//             if(!error) { 
//                 console.log("The Promise is Resolved");
//                 resolve("Now Calling Resolve Function");
                
//             }
//             else {
//                 console.log("The Promise is Rejected");
//                 reject("Now Calling Reject Function");
//                 return "Oh No";
//             }
//         },3000)
        
//     })
// }

// let callingtest = test().then((message) => {
//     console.log(message)
// }).catch((message) => {
//     console.log(message);   
// })

// const changeColor = async (color,delay) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = color;
//         return (`The Color Changed is ${color}`)
//     },delay)
// }

const changeColor = (color,delay) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        },delay);
    })
}

async function rainbow() {
    await changeColor("red",1000);
    await changeColor("blue",1000);
    await changeColor("green",1000);
    await changeColor("violet",1000);
}

