//Instanciando app
var app = angular.module('CureHazards',[]);


//Controle que inicia
app.controller('InitAssembly', function($scope) {

	$scope.teste = function (codigo){ 
		
	}

	
	$scope.verificaAssembly = function (codigo){
		var i;
		var linhas = codigos.split("\n"); //Dividi cada linha do código
		for (i = 0; i < linhas.length; i++) { //Percorre as linhas 
			
		}
	}
	
	function identificaInstrucao(linha){
		var n=0;
		var linha = linha.split(":");
		if (linha.length > 1){ //Identifica somente o código
			n = 1;
		}					
		return linha[n];	
	}
	
	
	
	
	
	
	
});