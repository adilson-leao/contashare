appARachaConta.controller('ctrlHistorico', function($scope, $window) {
	$scope.listaItens = [];
	$scope.nomeUsers = [];
	// recuperar obj salvo em localStorage

	var listaContaSTR = localStorage.getItem('listaConta');

	if (listaContaSTR != undefined){
		var listaContaJSON = JSON.parse(listaContaSTR);
		var componentes = listaContaJSON;
		$scope.nomeUsers = componentes.listaUsers;
		$scope.listaItens = componentes.listaItens;

	}

	$scope.getTotal = function(){
		var total = 0;
		for(var i = 0; i < $scope.listaItens.length; i++){
				var product = $scope.listaItens[i];
				total += (product.valorItem * product.qtdItem);
		}
			return total;
	}

	$scope.exibirTelaHistorico = true;


});
