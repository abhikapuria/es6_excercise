/**
|--------------------------------------------------
| Implement function called calculatePrice that simulates named parameters concept. 
  calculatePrice takes 3 params named price, tax and discount, out of which discount
  is default with 10. 
  Logic to use:
        taxablePrice = price - (price * (discount / 100))
    	  priceWithTax =  taxablePrice + (taxablePrice * (tax / 100));

|--------------------------------------------------
*/

function calculatePrice(...input) {
  let taxablePrice = (price, discount = 10) => {
    return price - price * (discount / 100);
  };

  let priceWithTax = (...data) => {
    let [price, tax, discount] = data;
    var calculatedTaxablePrice = taxablePrice(price, discount);
    return calculatedTaxablePrice + calculatedTaxablePrice * (tax / 100);
  };

  console.log(priceWithTax(...input));
}

calculatePrice(100, 5);
