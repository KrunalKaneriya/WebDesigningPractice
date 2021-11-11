// const btn1 = document.querySelector("#btn1");
// const btn2 = document.querySelector("#btn2");
// const eventbtn1 = document.querySelector("#eventbtn1");
// const eventbtn2 = document.querySelector("#eventbtn2");
// const eventbtn3 = document.querySelector("#eventbtn3");

// btn1.onclick = function () {
//     console.log("Screammm!!!!!!!!!!");
// }
// btn2.onclick = function () {
//     console.log("Wowwwwww");
// }

// eventbtn1.addEventListener('click',() => {
//     console.log("Now this the recommended approach");
// })

// eventbtn2.addEventListener("dblclick",function() {
//     alert("You Double Clicked The Button");
// })

// eventbtn3.addEventListener("click",() => console.log("This is the function one"));
// eventbtn3.addEventListener("click",() => console.log("This is the function two"));

//*This is the Keyboard events
// const btn1 = document.querySelector("#btn1").addEventListener('click',function (event) {
//     console.log(event);
// })

const txtbox = document.querySelector("#txtbox");
// txtbox.addEventListener("keydown",(event) => {
//     console.log(event);
// })

window.addEventListener("keyup",(event) => {
    console.log("The Key Pressed was "+ event.key)
    console.log("The Key Code is " + event.code)
})

