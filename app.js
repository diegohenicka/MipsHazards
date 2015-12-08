//Instanciando app
var app = angular.module('CureHazards',[]);

//Controle que inicia
app.controller('InitAssembly', function($scope) {

	$scope.teste = function (codigo){ 		
	}
	
	$scope.verificaAssembly = function (codigo){
		var i;
		var listaInstrucoes = new Array();		
		var linhas = codigo.split("\n"); //Dividi cada linha do código
		
		for (i = 0; i < linhas.length; i++) { //Percorre as linhas 
			var instrucao      = new Object();
			instrucao.original = trim(identificaLinhaInstrucao(linhas[i]));
			instrucao.tipo     = instrucao.original.substr(0,instrucao.original.indexOf(' '));		
			var auxiliar       = instrucao.original.substr(instrucao.original.indexOf(' ')+1);	
			auxiliar = replaceAll(auxiliar, '  ', ' ');	
			instrucao.campos   = auxiliar.split(' ');						
			listaInstrucoes[i] = instrucao;			
		}		
		for (i = 0; i < listaInstrucoes.length; i++) {
			if (i == 0){
				$scope.codigoOtimizadoI = listaInstrucoes[i].original+'/n';
			}else{
				if (listaInstrucoes[i].tipo == 'j'){
					$scope.codigoOtimizadoI = $scope.codigoOtimizadoI+listaInstrucoes[i].original+'/n';			
				}
				
				if (listaInstrucoes[i].tipo == 'lw'){  	
					if (listaInstrucoes[i-1].tipo == 'j'){
						$scope.codigoOtimizadoI = $scope.codigoOtimizadoI+listaInstrucoes[i].original+'/n';			
					}
					if (listaInstrucoes[i-1].tipo == 'lw'){
						if (listaInstrucoes[i].campos[1].indexOf(listaInstrucoes[i-1].campos[0]) != -1 ){
							alert(listaInstrucoes[i].campos[1]);
							alert(listaInstrucoes[i-1].campos[0]);							
						}
					}
				}
			}
			//
			
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
	
});