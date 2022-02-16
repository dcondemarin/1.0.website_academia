console.log("carregado externamente...");

var numero = 2;

function somarDois(x) {
  return x + numero;
}
console.log(somarDois(10));

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc
}
console.table('IMC ' + imc(85, 1.83));

let soma = (a, b) => {
  return a * b;
}
console.log(soma(10, 20));

let mult = (c, d) => c * d;
console.log(mult(5, 2));

var p = 'thiago';
var s = 2;
var r = p * s;
console.log(r);