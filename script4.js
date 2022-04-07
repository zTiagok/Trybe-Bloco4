let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; // DECLARA AS ARRAYS 
let sum = 0; // DECLARA A VAR DE SOMA 

for (let index of numbers) // ESTRUTURA DE REPETIÇÃO FOR/OF, MESMO CONCEITO DA REPETIÇÃO FOR
{

    sum += index; // A CADA LOOP, 'SUM' RECEBE O VALOR DA ARRAY PASSADA, SOMANDO COM A PRÓXIMA, ASSIM FAZENDO A SOMA EM SEQUÊNCIA
}

let division = sum / numbers.length; // TOTAL DA SOMA DE TODAS AS ARRAYS EM 'SUM' DIVIDO PELA QUANTIDADE TOTAL DE ARRAYS CONTIDA EM 'NUMBERS'

console.log(division);

if (division > 20) // COMPARA SE O VALOR DE 'DIVISION' É MAIOR QUE 20, CASO SIM ELE CONTINUA O IF, CASO NÃO ELE CONTINUA O ELSE
{
    
    console.log('Valor maior que 20!');
}
else
{
    
    console.log('Valor menor que 20!');
}

// FEITO!