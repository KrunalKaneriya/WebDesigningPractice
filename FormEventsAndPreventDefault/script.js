const form = document.querySelector("#form")
const tweetsContainer = document.querySelector("#tweetlist");
const lis = document.querySelectorAll("li");
// for(let li of lis ) {
//     li.addEventListener("click",function() {
//         li.remove(); 
//     })
// }

form.addEventListener('submit',function(e) {
    e.preventDefault();
    // alert("Form is Submitted");

    // alert(`The UserName is ${form.elements.username.value}`)
    // alert(`The Tweet is ${form.elements.tweets.value}`);
    let username = form.elements.username;
    let tweets = form.elements.tweets;
    addTweet(username.value,tweets.value);
    username.value = "";
    tweets.value = "";
    
    
})

const addTweet = (username,tweets) => {
    let newTweet = document.createElement("li");
    let boldTag = document.createElement("b");
    boldTag.append(username);
    newTweet.append(boldTag);
    newTweet.append(`- ${tweets}`);
    tweetsContainer.appendChild(newTweet);
}

tweetsContainer.addEventListener("click",function(e) {
    e.target.nodeName === "LI" && e.target.remove();
})