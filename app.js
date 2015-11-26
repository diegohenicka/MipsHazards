//Instanciando app
var app = angular.module('CureHazards',[]);

//Controle que inicia
app.controller('InitAssembly', function($scope) {

	$scope.teste = function (codigo){ 		
	}
	
	$scope.verificaAssembly = function (codigo){
		var i;
		var listaInstrucoes = new Array();
		var instrucao = new Object();
		
		var linhas = codigo.split("\n"); //Dividi cada linha do código
		
		for (i = 0; i < linhas.length; i++) { //Percorre as linhas 
			instrucao.tipo = tipoInstrucao(identificaLinhaInstrucao(linhas[i]));	
			listaInstrucoes[i] = instrucao;
			alert(listaInstrucoes[i].tipo);
		}
	}
	
	function identificaLinhaInstrucao(linha){ //Identifica somente a Instrução da Linha
		var n=0;
		var linha = linha.split(":");
		if (linha.length > 1){ 
			n = 1;
		}					
		return linha[n];	
	}
	
	function tipoInstrucao(linhainstrucao){ //Identifica somente a Instrucao
		//lw, sw, add, addi, addu, sub, bne, beq, j, NOP
		linhainstrucao = trimLeft(linhainstrucao);
		if (linhainstrucao.substr(0, 1) == 'j'){
			return 'jump mano';
		}
	}	
	
});