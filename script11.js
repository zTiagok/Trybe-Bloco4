let bruteSalary = 3000.00;
let INSSprofit = null;
let incomeTax = null;


// INSS ------------------------------------------------------------------------------------------------------------
if (bruteSalary < 3000)
{

    INSSprofit = bruteSalary * .08;
}
else if (bruteSalary >= 1556.94 && bruteSalary < 2594.92)
{

    INSSprofit = bruteSalary * .09;
}
else if (bruteSalary >= 2594.92 && bruteSalary < 5189.82)
{

    INSSprofit = bruteSalary * .11;
}
else if (bruteSalary >= 5189.82)
{

    INSSprofit = 570.88;
}

// BASE SALARY -----------------------------------------------------------------------------------------------------
let baseSalary = bruteSalary - INSSprofit;

// IR --------------------------------------------------------------------------------------------------------------

if (baseSalary < 1903.98)
{

    incomeTax = 0
}
else if (baseSalary >= 1903.98 && baseSalary < 2826.65)
{

    incomeTax = (baseSalary * .075) - 142.80
}
else if (baseSalary >= 2826.65 && baseSalary < 3751.05)
{

    incomeTax = (baseSalary * .15) - 354.80
}
else if (baseSalary >= 3751.05 && baseSalary < 4664.68)
{

    incomeTax = (baseSalary * .225) - 354.80
}
else if (baseSalary >= 4664.68)
{

    incomeTax = (baseSalary * .275) - 354.80
}

baseSalary = baseSalary - incomeTax

console.log(baseSalary);

// FEITO!


