/**
|--------------------------------------------------
| Create a generator function that returns 10 random numbers between 10 and 50
|--------------------------------------------------
*/
const countOfNumsToBeGenerated = 10;

function* RandomNumbers(start, end){
    yield console.log(Math.floor(Math.random()*(end-start+1)+start));
}

for(let num = 0; num <= countOfNumsToBeGenerated; num++){
    RandomNumbers(10, 50).next();
}

