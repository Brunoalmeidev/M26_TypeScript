"use strict";
// Criando um array de objetos do tipo 'aluno', chamado 'alunos'
// Cada objeto segue a estrutura definida no tipo 'aluno'
const alunos = [
    {
        nome: "Bruno",
        cursos: ["Analise de Sistemas", "Desenvolvedor Full Stack"],
        idade: 32,
    },
    {
        nome: "Ana",
        cursos: ["Front-end", "Python"],
        idade: 23,
    },
];
// Adicionando um novo aluno ao array 'alunos' usando o método 'push'
// O novo aluno deve seguir a estrutura do 'aluno'
alunos.push({
    nome: "Julia",
    cursos: ["Arquitetura"],
    idade: 29
});
// Criando um novo objeto do tipo 'aluno', chamado 'novoAluno'
// Observe que a propriedade 'cursos' não está presente, já que ela é opcional
const novoAluno = {
    nome: "Lucas",
    idade: 32,
};
// Função para exibir o nome de um aluno
// A função recebe um objeto do tipo 'aluno' como parâmetro e imprime o nome desse aluno no console
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
;
