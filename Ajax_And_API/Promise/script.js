//Promise Version

fetch("https://api.cryptonator.com/api/ticker/btc-usd")
    .then((res)=> {
        console.log(res);
        return res.json();
    })
    .then((data) => {
        console.log(data);
        console.log(data.ticker.base);
    })
    .catch((err) => {
        console.log('Error',err);
    })

//Async and await
// const fetchPrice = async (url) => {
//     try {
//        const resolved = await fetch(url);
//        const data =await resolved.json();
//        console.log(data);
//         console.log(data.ticker.price)
//     }
//     catch {
//         console.log("Error");
//     }
// }

// fetchPrice("https://api.cryptonator.com/api/ticker/btc-usd");