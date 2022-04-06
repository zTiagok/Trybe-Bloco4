const aNumber = -110;


if (aNumber > 100)
{

    console.log("There's an error calculating your grade.")
}
else if (aNumber >= 90 && aNumber < 100)
{

    console.log("You got an A grade!");
}
else if (aNumber < 90 && aNumber >= 80)
{

    console.log("You got a B grade!");
}
else if (aNumber < 80 && aNumber >= 70)
{

    console.log("You got a C grade!");
}
else if (aNumber < 70 && aNumber >= 60)
{

    console.log("You got a D grade!");
}
else if (aNumber < 60 && aNumber >= 50)
{

    console.log("You got an E grade!");
}
else if (aNumber < 50 && aNumber >= 0)
{

    console.log("You got a F grade!");
}
else
{

    console.log("There's an error calculating your grade.")
}

// FEITO!