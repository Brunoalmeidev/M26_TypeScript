"use strict";
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
alunos.push({
    nome: "Julia",
    cursos: ["Arquitetura"],
    idade: 29
});
const novoAluno = {
    nome: "Lucas",
    idade: 32,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
