/**
|--------------------------------------------------
| Code a function that uses iterable / iterator protocol to fetch keys of object and their values
    Input: { name: ‘zeo’, age:20, grade:’A’}
    Output: name -> zeo
	  age -> 20
	  grade -> A

|--------------------------------------------------
*/
let input = { name: "zeo", age: 20, grade: "A" };

input[Symbol.iterator] = function*() {
    let keys = Object.keys(this);
    yield keys.map((k) => (        
        console.log(`${k} --> ${input[k]}`)
    ));
};

for (let property of input) {
  property;
}
