//Exercicio 1
/*
const filme = {
    nome: 'O lobo de Wall Street',
    diretor: 'Martin Scorsese',
    lançamento: '2014',
    elenco:["Leonardo DiCaprio", "Jonan Hill", "Margot Robie", "Matthew McConaughey", "Cristin Milioti"],
    assisti: true
};
filme.personagens = ['Jordan Belfort', 'Donnie Azoff', 'Naomi Lapaglia', 'Mark Hanna', 'Teresa Petrillio'];

console.log(filme.elenco[0] + '->' + filme.personagens[0]);
console.log(filme.elenco[1] + '->' + filme.personagens[1]);
console.log(filme.elenco[2] + '->' + filme.personagens[2]);
console.log(filme.elenco[3] + '->' + filme.personagens[3]);
console.log(filme.elenco[4] + '->' + filme.personagens[4]);

console.log(filme.nome);
console.log(filme.diretor);
console.log(filme.lançamento);
console.log(filme["elenco"]);
console.log(filme["assisti"]);

filme.elenco[0] = "xuxa";
console.log(filme.elenco[0]);

console.log(filme);
*/

//Exercicio 2
/*
const pessoa = {
    nome: prompt('Seu nome '),
    idade: prompt('Sua idade '),
    gêneroMusical: prompt('Seu gênero musical favorito '),
};
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.gêneroMusical);
 console.log('O nome da pessoa é ', pessoa.nome, 'ela tem ', pessoa.idade, 'anos, e gosta muito de ', pessoa.gêneroMusical)
 */

 /*
 const usuario = {
    nome: 'prof',
    idade: 25,
    email: 'prof@senacrs.com.br',
    cidade: 'São Paulo'
 }
 
 const novoUsuario = {
    ...usuario,
    nome: 'João',
    idade: 28
 }

 console.log(usuario);
 console.log(novoUsuario);

 const listaDeNomes = ['Mika', 'Paula', 'Vitor'];

 const copiaListaDeNomes = [...listaDeNomes];

 console.log(copiaListaDeNomes)///['Mika', 'Paula', 'Vitor']
*/

 //Exercicio 4
 const pessoa = {
    nome: 'Renan',
    idade: 15,
    gêneroMusical: 'MPB',
};
function objetoPessoa(pessoa2){


    const maisInformações = {
        ... pessoa2,
        comidas: ['Pizza', 'Lasanha', 'Massa'],
         amigo: {
            nome: 'Mateus',
            idade: 17
        }
    }
    console.log('O nome da pessoa é ', pessoa.nome, 'e suas comidas favoritas são ', maisInformações.comidas, '.Seu melhor amigo se chama ', maisInformações.amigo.nome, 'e tem ', maisInformações.amigo.idade, 'anos') 
}

objetoPessoa(pessoa);
