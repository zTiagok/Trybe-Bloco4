let leitor = 
{

    nome: 'Júlia',
    sobreNome: 'Pessoas',
    idade: 21,
    livrosFavoritos:
    [
        {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
        }
    ]
};

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobreNome + ' se chama ' + leitor.livrosFavoritos[0].titulo)

// FEITO!