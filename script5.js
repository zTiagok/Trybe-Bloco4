let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let greaterNumber = 0;

for (let index of numbers)
{
    if (index > greaterNumber)
    {

        greaterNumber = index
    }
}

console.log(greaterNumber);