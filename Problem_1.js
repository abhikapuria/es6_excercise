/**
|--------------------------------------------------

1.	Write a program that prints the output as shown in output section using input shown in input section

| Input:
[
    {text: 'ES6 is awesome', type: 'p’},
    {text: 'ES6 is significant update in JS history', type: 'li’},
    {text: 'const creates immutable variables', type: 'li’},
    {text: 'Block scoping via let and const', type: 'li’},
    {text: 'ES6 was released in 2015', type: 'h3’}
];

Output:
Element type is li with text ES6 is significant update in JS history
Element type is li with text const creates immutable variables
Element type is li with text Block scoping via let and const 

|--------------------------------------------------
*/

let data = [
    {text: 'ES6 is awesome', type: 'p'},
    {text: 'ES6 is significant update in JS history', type: 'li'},
    {text: 'const creates immutable variables', type: 'li'},
    {text: 'Block scoping via let and const', type: 'li'},
    {text: 'ES6 was released in 2015', type: 'h3'}
];

function printTextFilteredByType(data, filterBy = 'li'){  
    /**
    |--------------------------------------------------
    | With Arrow function
    |--------------------------------------------------
    */  
    for(let item of data)
    {
        if(item.type === filterBy){
            this.writeToConsole(item);
        }       
    }
    
    /**
    |--------------------------------------------------
    | Without Arrow function
    |--------------------------------------------------
    */
    
    // for(let { text, type} of [...data]){
    //     if(type === filterBy){
    //     console.log(`Element type is ${type} with ${text}`);
    //     }
    // }
}

writeToConsole = (data) => {    
    const { text, type } = data;    
    var message = `Element type is ${type} with ${text}`;
    console.log(message);
};

printTextFilteredByType(data, 'li');