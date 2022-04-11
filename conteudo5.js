let esportista = 
{
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: 
    {

        golden: 2,
        silver: 3,
    },
    bestInTheWorld:[2006, 2007, 2008, 2009, 2010, 2018],
    
}

console.log('A jogadora ' + esportista.name + ' ' + esportista.lastName + ' tem ' + esportista.age + ' anos de idade.');
console.log('A jogadora ' + esportista.name + ' ' + esportista.lastName + ' foi eleita a melhor do mundo por ' + esportista.bestInTheWorld.length + ' vezes.');
console.log('A jogadora possui ' + esportista.medals.golden + ' medalhas de ouro e ' + esportista.medals.silver + ' medalhas de prata.');