function calcularMontante (capital, taxa, periodo) {
  let montante = capital * Math.pow((1 + taxa), periodo - 1)

  montante = arredondar(montante)

  return montante
}

function arredondar (valor) {
  const precisao = 100
  const arredondado = Math.round((valor + Number.EPSILON) * precisao) / precisao
  return arredondado
}

function calcularPrestacoes (montante, numeroParcelas) {
  const prestacaoBase = arredondar(montante / numeroParcelas)
  const resultado = Array(numeroParcelas).fill(prestacaoBase)
  // * a - valor atual / t - valor total
  let somaPrestacoes = resultado.reduce((a, t) => a + t)
  let diferenca = arredondar(montante - somaPrestacoes)
  let i = 0
  while (diferenca !== 0) {
    resultado[i] = resultado[i] + 0.01
    somaPrestacoes = resultado.reduce((a, t) => a + t)
    diferenca = arredondar(montante - somaPrestacoes)
    i++
  }
  return resultado
}

module.exports = {
  calcularMontante,
  arredondar,
  calcularPrestacoes
}
