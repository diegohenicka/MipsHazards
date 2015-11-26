//Instanciando app
var app = angular.module('CureHazards',[]);


//Controle que inicia
app.controller('InitAssembly', function($scope) {
	var PrimeOtimizado = '';
	$scope.verificaAssembly = function (codigo){ 
		if ((codigo == undefined) || (codigo == '')) {
			alert('Código Assembly Vazio!');
		}else{
			ArrCodigo = codigo.split('\n');
			for (i = 0; i < ArrCodigo.length; i++) { 
				AnalisaLinhaAssemblyPrimario(ArrCodigo[i]);
				if (i==0){
					PrimeOtimizado = ArrCodigo[i];
				}else{
					PrimeOtimizado = PrimeOtimizado+'\n'+ArrCodigo[i];
					PrimeOtimizado = PrimeOtimizado+'\n'+'NOP';
				}
			}			
			$scope.codigoOtimizadoI = PrimeOtimizado;
		}
	}
	

	function AnalisaLinhaAssemblyPrimario(linha){
		//j, lw, sw, add, addi, addu, sub, bne, beq, NOP
		var x = 0;
		var linha2 = linha;
		while (TipoLinha(linha2) == 'N'){
			linha2 = linha.substr(x, 4);
			x = x+1;
		}
		alert(TipoLinha(linha2));
	}	
	
	function TipoLinha(linha) {
		if (linha.substr(0, 1) == 'j'){		
			return 'jump';
		}
		if (linha.substr(0, 2) === 'lw'){		
			return 'lw';
		}
		if (linha.substr(0, 2) === 'sw'){
			return 'sw';
		}
		return 'N';
	}

});