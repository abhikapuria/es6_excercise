/**
|--------------------------------------------------
| Create a promise based code that echoes input 5 times after a give delay
|--------------------------------------------------
*/


  const input = "Promise....";
  
  function Prom(delay = 2000){
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(input), delay);
        console.log(input, '-', delay);
      });
  }

  Prom(1000)
  .then(() => Prom())
  .then(() => Prom(3000))
  .then(() => Prom(4000))
  .then(() => Prom(5000));