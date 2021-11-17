const req = new XMLHttpRequest();

req.onload = function() {
    console.log("Done with request");
    console.log(this);
    let data = JSON.parse(this.responseText);
    console.log(data.ticker)
}

req.onerror = function(err) {
    console.log("Error",err);
}

req.open('GET','https://api.cryptonator.com/api/ticker/btc-usd');
req.send();