console.log('carregando...');

function mostra(f) {
  document.write(f);
  document.write('<br>');
}

// var numRecebido = parseInt(prompt('passe um numero'))
// var tab = parseInt(prompt('tab'))

for (let mult = 1; mult <= 10; mult++) {
  mostra(2 * mult);
}
mostra('FIIIMMMMMM do FOR');
  
