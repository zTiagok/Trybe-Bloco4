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

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobreNome + ' se chama ' + leitor.livrosFavoritos[0].titulo);


leitor.livrosFavoritos.push(1)

leitor.livrosFavoritos[1].titulo = 'Harry Potter e o Prisioneiro de Azkaban'
leitor.livrosFavoritos[1].autor = 'JK Rowling'
leitor.livrosFavoritos[1].editora = 'Rocco'


console.log(leitor.livrosFavoritos[1])