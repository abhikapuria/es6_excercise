/**
|--------------------------------------------------
| 3.	Create a class called TableGenerator, which contains data and title properties. 
        Develop render method which generates html markup as table for given input data.
Input:

let data = [
    {title: 'apple', price: 2, qty: 30},
    {title: 'banana', price: 1, qty: 30},
    {title: 'chikoo', price: 1, qty: 30}
];

title = “fruits” 

|--------------------------------------------------
*/

let data = [
    { title: "apple", price: 2, qty: 30 },
    { title: "banana", price: 1, qty: 30 },
    { title: "chikoo", price: 1, qty: 30 }
  ],
  title = "fruits";

class TableGenerator {
  constructor(data, title) {
    this._data = data;
    this._title = title;
  }

  generateTableHeader() {
    return `<thead><tr><th>Title</th><th>Price</th><th>Qty</th></tr></thead>`;
  }

  generateTableBody() {
    let body = "";
    this._data.map(
      x =>
        (body += `<tr><td>${x.title}</td><td>${x.price}</td><td>${
          x.qty
        }</td></tr>`)
    );
    return body;
  }

  render() {
    console.log("====================================");
    console.log(this._title);
    console.log("====================================");
    console.log();
    let table = `<table>${this.generateTableHeader()}${this.generateTableBody()}</table>`;
    console.log(table);
  }
}

var table = new TableGenerator(data, title);
table.render();
