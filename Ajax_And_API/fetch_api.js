//*Promise Version
// fetch("https://api.cryptonator.com/api/ticker/btc-usd")
//     .then((res) => {
//         console.log("Response",res)
//         return res.json();
//     })
//     .then((data) => {
//         console.log("Data Parsed")
//         console.log(data);
//         console.log(`Stock => ${data.ticker.base} || Price => ${data.ticker.price}`);
//     })
//     .catch((err) => {
//         console.log("Error",err);
//     })

//*Async And Await Version

const fetchBitcoinPrice = async () => {
    try{
        const resolved = await fetch("https://api.cryptonator.com/api/ticker/btc-usd");
        console.log(resolved);
        const data = await resolved.json();
        console.log(data);
    }catch(err) {
        console.log("Error Something went wrong",err)
    }
}
    