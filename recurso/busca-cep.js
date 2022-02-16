console.log('buscando cep...');

var formCep = document.getElementById('busca-cep');

var inputCep = document.getElementById('cep');
var inputRua = document.getElementById('rua');
var inputEstado = document.getElementById('estado');

formCep.onsubmit = function(e) {
  e.preventDefault();

  var cepDigitado = inputCep.value;
  // var url = "https://viacep.com.br/ws/" + cepDigitado + "/json"
  var url = "https://swapi.dev/api/people/"

  fetch(url).then(function(resposta) {
    return resposta.json()
  }).then(function(pessoas) {
    console.log(pessoas.results[0]);
    if (!('erro' in pessoas)) {
      inputRua.value = pessoas.results[0].name;
      inputEstado.value = pessoas.results[0].birth_year;
    } else {
      inputCep.reset();
      inputCep.focus();
      alert('dado inválido');
    }
  });


}
