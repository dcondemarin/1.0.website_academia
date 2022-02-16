console.log('DataBase...');

let request, db;

request = window.indexedDB.open('DbAtletas', 1);
request.onerror = function(event){
  $('#mensagem-db').addClass('alert alert-danger');
  $('#mensagem-db').html("Erro ao abrir o banco de dados");
}

request.onupgradeneeded = function(event) {
  $('#mensagem-db').addClass('alert alert-info');
  $('#mensagem-db').html('Banco de dados preparado para uso');

  db = event.target.result;
	let objectStore = db.createObjectStore('atletas', { keyPath: 'email' });
}

request.onsuccess = function(event) {
  $('#mensagem-db').addClass('alert alert-success');
  $('#mensagem-db').html('Conexão realizada com sucesso');
  db = event.target.result;
}

$('#incluirDb').click(function() {
  let nome = $('#nome').val();
  let dataNasc = $('#data').val();
  let sexo;
  if (     $('#masculino').is(':checked')      ) {
    sexo = 'masculino'
  } else {
    sexo = 'feminino'
  }
  let telefone = $('#telefone').val();
  let email = $('#email').val();

  if ( $('#profissional').is(':checked')   ) {
    categoria = 'profissional'
  } else {
    categoria = 'amador'
  }
  let modalidade = $('#modalidade').find(':selected').text();

  let transaction = db.transaction(['atletas'], 'readwrite');

  transaction.oncomplete = function (event) {
		$("#mensagem-db").html("Registro adicionado com sucesso!");
	};

  transaction.onerror = function(event) {
    alert('Ocorreu um erro ao gravar o registro');
  }

  var objStore = transaction.objectStore('atletas');
  objStore.add({
		email: email,
		nome: nome,
		data: dataNasc,
		sexo: sexo,
		telefone: telefone,
		modalidade: modalidade,
		categoria: categoria,
	});

});

