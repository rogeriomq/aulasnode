import CPF from 'cpf-check'
console.log('VALIDANDO CPF...')
const cpf = CPF.generate()
const validacao = CPF.validate(cpf)
console.log('Validação:', cpf, validacao)
