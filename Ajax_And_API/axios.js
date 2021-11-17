// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then((res) => {
//         console.log(res.data.ticker);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// const getBitcoin = async () => {
//     const res =await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
//     console.log(res.data)
//     console.log(res.data.ticker)
// }

const jokesul = document.querySelector('ul');

const getDadJoke =async () => {
    const config = {headers : {'Accept':'application/json'}}
    const res=await axios.get('https://icanhazdadjoke.com/',config);
    let joke = res.data.joke
    let newLI = document.createElement("LI");
    newLI.append(joke)
    jokesul.appendChild(newLI);
}

const button = document.querySelector('button');
button.addEventListener('click',() => {
    getDadJoke();
})