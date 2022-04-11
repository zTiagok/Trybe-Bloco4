let usuario = 
{

    id: 99,
    email: 'ztiagok@gmail.com',
    infoPessoal: {

        nome: 'Tiago',
        sobreNome: 'Braga',
        endereço: 
        {

            rua: 'Gentil',
            bairro: 'Itaipava',
            cidade: 'Petrópolis',
            estado: 'Rio de Janeiro',
        },
    },
};

console.log(usuario['id']);
console.log(usuario['email']);

console.log(usuario.infoPessoal.endereço.rua);
console.log(usuario['infoPessoal']['endereço']['rua']);