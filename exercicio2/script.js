const primeiroValor = Number(prompt("Informe o primeiro valor:")) 
const segundoValor = Number(prompt("Informe o segundo valor:"))

console.log(`
O Primeiro valor é maior que o segundo valor? ${primeiroValor > segundoValor}
O Primeiro valor é igual ao segundo valor? ${primeiroValor === segundoValor}
O primeiro numero é divisível pelo segundo? ${(primeiroValor % segundoValor) === 0 }
O segundo numero é divisível pelo primeiro? ${(segundoValor % primeiroValor) === 0 }
`)