const input = document.querySelector("input");
const h1 = document.querySelector("h1");
// input.addEventListener("change",function (e) {
//     console.log("This is Change Event");
// });

// input.addEventListener("input",function (e) {
//     h1.innerHTML =  input.value;
// })

input.addEventListener("input",function(e){
    if(this.value == "") {
        h1.innerHTML = "Enter Your Username";
    }
    else {
        h1.innerHTML = `Welcome, ${this.value}`;
    }
   
})