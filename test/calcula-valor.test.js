const calculavalor = require('../src/calcula-valor.js')

//* Agrupa os testes
describe('CalcularMontante', () => {
  test('Com uma prestacao o montante e igual ao capital', () => {
    //* Operacao
    //* valores(valor, juros, prestacoes)
    const montante = calculavalor.calcularMontante(100, 0.0175, 1)

    //* Resultado ou comportamento esperado
    //* Jest verifica se e verdadeiro
    expect(montante).toBe(100)
  })

  test('Com 4 prestacoes o montante acrescido de juros', () => {
    //* Operacao
    const montante = calculavalor.calcularMontante(500, 0.025, 4)
    //* Resultado ou comportamento esperado
    expect(montante).toBe(538.45)
  })
})

describe('Arredondar', () => {
  test('arrendondar em duas casa decimais', () => {
    const resultado = calculavalor.arredondar(538.4453124999998)
    expect(resultado).toBe(538.45)
  })

  // Regressao
  test('1.005 - Esperando 1.01, 1.00', () => {
    const resultado = calculavalor.arredondar(1.005)
    expect(resultado).toBe(1.01)
  })
})

describe('calcularPrestacoes', () => {
  test('O numero de parcelas e igual ao numero de prestacoes', () => {
    // premissas
    const numeroPrestacoes = 6
    // Operacao
    const prestacoes = calculavalor.calcularPrestacoes(200, numeroPrestacoes)
    // Resultado
    expect(prestacoes.length).toBe(numeroPrestacoes)
  })

  test('uma unica prestacaoo, valor igual ao montante', () => {
    const numeroPrestacoes = 1
    const prestacoes = calculavalor.calcularPrestacoes(50, numeroPrestacoes)
    expect(prestacoes.length).toBe(numeroPrestacoes)
    expect(prestacoes[0]).toBe(50)
  })

  test('Duas prestacoes, valor igual a metade do montante', () => {
    const numeroPrestacoes = 2
    const prestacoes = calculavalor.calcularPrestacoes(50, numeroPrestacoes)
    expect(prestacoes.length).toBe(numeroPrestacoes)
    expect(prestacoes[0]).toBe(25)
    expect(prestacoes[1]).toBe(25)
  })

  test('valor da soma das prestacoes deve ser igual ao montante com duas casa decimais', () => {
    // * Dado (given)
    const numeroPrestacoes = 3
    const montante = 100
    // * Quando(when)
    const prestacoes = calculavalor.calcularPrestacoes(montante, numeroPrestacoes)
    // * Entao (then) - assertivas
    expect(prestacoes.length).toBe(numeroPrestacoes)
    const soma = calculavalor.arredondar(prestacoes[0] + prestacoes[1] + prestacoes[2])
    expect(soma).toBe(montante)

    for (let i = 0; i < prestacoes.length - 1; i++) {
      const j = i + 1
      expect(prestacoes[i]).toBeGreaterThanOrEqual(prestacoes[j])
    }
  })

  test('Desafio final', () => {
    // *Dado
    const numeroPrestacoes = 3
    const montante = 101.994
    // * Quando(when)
    const prestacoes = calculavalor.calcularPrestacoes(montante, numeroPrestacoes)
    // * Entao (then) - assertivas
    expect(prestacoes.length).toBe(numeroPrestacoes)
    const soma = calculavalor.arredondar(prestacoes[0] + prestacoes[1] + prestacoes[2])
    expect(soma).toBe(calculavalor.arredondar(montante))

    for (let i = 0; i < prestacoes.length - 1; i++) {
      const j = i + 1
      expect(prestacoes[i]).toBeGreaterThanOrEqual(prestacoes[j])
    }
  })
})
