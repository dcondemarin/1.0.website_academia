console.log('listar...');

$(document).ready(function () {

  // listar atletas
  $('#listar').click(function(_event) {
    _event.preventDefault();

  url = 'http://localhost:3000/atletas'; 

    $.ajax({
      dataType: 'json',
      url: url,
      method: 'GET',
      success: function(resposta) {
        $('table > tbody').html('');
        $.each(resposta, function(index, item) {
          let linha = $('<tr>');

          let colunas = '<td>' + item.nome  + '</td>';
          colunas += `<td> ${item.idade} </td>`;
          colunas += `<td> ${item.modalidade}  </td>`;
          colunas += `<td> ${item.pontos}  </td>`;

          linha.append(colunas);

          $('table > tbody').append(linha);
        })
      },
      error: function(erro) {
        console.log(erro);
      }
    });

  });

   // cadastrar
   $('#cadastrar').submit(function(e) {
    e.preventDefault();

    url = 'http://localhost:3000/atletas';

    $.ajax({
      url: url,
      method: 'POST',
      data: {
        nome: $('#nome').val(),
        idade: $('#idade').val(),
        modalidade: $('#modalidade').val(),
        pontos: $('#pontos').val(),
      },
      success: function(resposta) {
        $('#status').text = 'Dados inseridos'
        // alert('Dados inseridos');
      },
      error: function(erro) {
        console.log("Error: " + erro.status);
      }
    });

  });

});