// let productValue = undefined;
// let productSale = undefined;

// if (productValue < 0 || productSale < 0)
// {

//     console.log("You need to input a value greater then 0!");
// }

let productValue = 400; // CUSTO
let productSale = 500; // VALOR DE VENDA
let productTax = (400 * 0.20) + productValue; //ACRESCIMO DE 20% DE IMPOSTO

let profit = productSale - productTax; //VENDA DO PRODUTO, LUCRANDO EM BASE DO CUSTO PRIMÁRIO + IMPOSTO

console.log(profit);

// FEITO!