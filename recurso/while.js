console.log('carregando...')

function pulaLinha() {
  document.write('<br>');
}
function mostra(f) {
  document.write(f);
}

pulaLinha();
var anoCopa = 1930;
// var limite = parseInt(prompt('informe uma data limite'));
var brasilJogou = false;
while (anoCopa <= 1938 || brasilJogou == true) {
  mostra(`Teve copa em ${anoCopa}`);
  pulaLinha();
  // anoCopa = anoCopa + 4;
  anoCopa += 4;
}
mostra('fiiiim do WHILE');

pulaLinha();
var num = 11;
// do - whiwe: sempre imprimi uma func antes de entrar no laço
do {
  mostra(`Imprimir na tela: ${num}`)
  // num = num + 1;
  // num += 1;
  num++;
  pulaLinha();
} 
while (num < 10)