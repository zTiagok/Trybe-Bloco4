const chessPiece = "queen".toLowerCase();


console.log('Your piece was the ' + chessPiece +".");

switch(chessPiece)
{
    case "knight": 
        console.log("The knight can only do 'L' movements, always moving to the tip of the 'L'.");
        break;

    case "pawn":
        console.log("The pawn can only move forward and can capture an enemy unit if it's in his front diagonal.");
        break;

    case "bishop":
        console.log("The bishop can only move and capture enemy units in diagonals.");
        break;

    case "rook":
        console.log("The rook can only move and capture enemy units in cross.");
        break;

    case "queen":
        console.log("The queen can move at any direction of her origin position. It's like the sum of the bishop and rook movements.");
        break;

    case "king":
        console.log("The king can only move one unit of his origin position at any direction.");
        break;

    default: 
        console.log("There was an error! Choose another piece.");
        break;
}


// FEITO!