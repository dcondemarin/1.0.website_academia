console.log("add atletas...");

var titulo = document.getElementById("titulo");
// var titulo = document.getElementsByClassName('titulo');
// var titulo = document.querySelector('#titulo');
console.log(titulo);
console.log(titulo.textContent);

titulo.textContent = "Lista de Atletas";

var botaoInserirAtleta = document.getElementById("inserir");

botaoInserirAtleta.addEventListener("click", function (_event) {
	// previne o comportamento padrao
	_event.preventDefault();

	// acesso ao form
	var form = document.querySelector("#registro");

	//guardar o valor dos inputs em variaveis
	var nome = form.nome.value.toLowerCase();
	var idade = form.idade.value;
	var modalidade = form.modalidade.value;
	var pontos = form.pontos.value;

	// criar uma tr
	var atletaTr = document.createElement("tr");

	// criar tds
	var nomeTd = document.createElement("td");
	var idadeTd = document.createElement("td");
	var modalidadeTd = document.createElement("td");
	var pontosTd = document.createElement("td");

	// montar as tds com o value do input (textContent)
	nomeTd.textContent = nome;
	idadeTd.textContent = idade;
	modalidadeTd.textContent = modalidade;
	pontosTd.textContent = pontos;

	// montar a tr com as tds
	atletaTr.appendChild(nomeTd);
	atletaTr.appendChild(idadeTd);
	atletaTr.appendChild(modalidadeTd);
	atletaTr.appendChild(pontosTd);

	var atletasTable = document.getElementById("tabela-atleta");

	// montar a tabela com a tr e as tds
	atletasTable.appendChild(atletaTr);

	// definir cor na table de acordo com a pontuação do atleta
	if (pontos >= 90 && pontos <= 100) {
		// recebe class melhores
		pontosTd.classList.add("melhores");
	} else if (pontos > 69 && pontos < 90) {
		// recebe class intermediario
		pontosTd.classList.add("intermediario");
	} else {
		// recebe class baixo
		pontosTd.classList.add("baixo");
	}

	// limpar o form
	form.reset();
});
