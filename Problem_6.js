/**
|--------------------------------------------------
|   Create a generator function that calculates foreign exchange price between given currencies
    Use: https://api.fixer.io/latest?base=USD
    exhcangeRate(from,to,amount)
    exhcangeRate(USD,INR,100)

|--------------------------------------------------
*/

function* exchangeRate(from, to, amount) {
  let API_URL = `https://api.fixer.io/latest?base=${from}`;
  fetch(API_URL)
  .then((response) => {
    response.json().then((data) => {
        console.log('====================================');
        console.log(`${from} --> ${to} == ${data.rates[to] * amount}`);
        console.log('====================================');
    });
  })
  .catch((error) =>{
      console.log('====================================');
      console.log(error);
      console.log('====================================');
  });
}

exchangeRate("USD", "INR", 100).next();