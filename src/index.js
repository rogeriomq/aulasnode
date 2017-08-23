import opmat, {soma, sub, mult} from './opmat'
import Aluno from './Aluno'
import cidades from './cidades.json'
let result_divisao = opmat(10, 2)
let result_soma = soma(10, 2)
let result_sub = sub(10, 2)
let result_mult = mult(10, 2)
console.log(
  'result_divisao =', result_divisao,
  'result_soma =', result_soma,
  'result_sub =', result_sub,
  'result_mult =', result_mult,)

let aluno = new Aluno()
aluno.matricula = 118141
aluno.nome = 'Rogério'
console.log(aluno)
const cidade1 = cidades[0]
let cidadeNameUF = cidade1.c + ' - ' + cidade1.uf
console.log(cidade1, cidadeNameUF)
console.log('Total de Cidades:', cidades.length)