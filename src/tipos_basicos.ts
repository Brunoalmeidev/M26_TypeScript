// boolean
let estaChovendo: boolean = false

estaChovendo = true

// number
let idade: number = 27

let altura: number = 1.75

// string
const nacionalidade: string = 'brasileira'

// array
const colegas: string[] = ['lucas', 'fernanda']
const tecnologias: Array<string> = ['HTML', 'CSS', 'JS']
const notas: ReadonlyArray<number> = [7, 9, 5, 8];

// tupla: Tuplas podem ser usadas para armazenar conjuntos de valores de tipos distintos
const lista: [nome: string, estaEstudando: boolean, idade: number] = ['bruno', true, 27]

// union
let idadeDaAna: number | string = 25
idadeDaAna = '25 anos'

// any: any aceita qualquer tipo de dado
let dadosDaApi: any;
dadosDaApi = 10
dadosDaApi = true
dadosDaApi = [1,2,3]
dadosDaApi = 'string'

// 
let curso = 'front-end'