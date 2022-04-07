let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; // DEFINIÇÃO DAS ARRAYS
let difference = Number;
let oddNumber = Number;

for (let index of numbers)
{

    difference = index % 2;

    if (difference == 1)
    {
        oddNumber += 1;

    }
}

if (oddNumber >= 1)
{

    console.log('Em ' + numbers + "...");
    console.log('Há ' + oddNumber + ' números ímpares.');
}
else
{
    console.log('Em ' + numbers + "...");
    console.log('Não há números ímpares.');
}
