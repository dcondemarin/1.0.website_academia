console.log('condicional carregado...');

function mostra(frase) {
  document.write(frase)
}


var idade = 12;
var idade = 20
var acompanhado = true;

if (idade >= 18) {
  mostra("Maior de idade então pode entrar...");
} else if (idade >= 16 || acompanhado == true ) {
  mostra('Menor, acompanhado então pode entar!');
} else {
  mostra('Menorzinho, não pode!');
}

// > maior que
// < menor que
// >= maior ou igual
// <= menor ou igual
// != diferente 
// == igual (comparação)
// === igual (estritamente)
// !=== diferente (estritamente)

// && (END)
// || (OR)

function pulaLinha() {
  document.write('<br>')
}

var valor = 5;
var palavra = '5';
console.log(typeof(valor));
console.log(typeof(palavra));
if (5 === '5'){
  pulaLinha();
  mostra('simmmmmmm');
} else {
  pulaLinha();
  mostra('não');
}