appARachaConta.controller('ctrlConta', function($scope, $window) {
	$scope.listaUsers = [];
	$scope.listaUsersConta = [];
	$scope.nomeUser = "";
	$scope.listaItens = [];
	$scope.listaItensConta = [];
	$scope.seqIdItem = 0;
	$scope.seqIdUser = 0;
	$scope.nomeItem ="";
	$scope.valorItem = null;
	$scope.qtdItem = 1;
	$scope.userItem = 0;
	$scope.resultado = 0;
	$scope.valorConta = 0;
	/*$scope.listaUsers = [{id: 0, nomeUser: "ddd"}, {id: 1, nomeUser: "eee"}];
	$scope.listaItens = [{idItem: 0, userItem: 0, nomeItem: "t", valorItem: 5, qtdItem: 1}, {idItem: 1, userItem: 0, nomeItem: "y", valorItem: 7, qtdItem: 1}, {idItem: 2, userItem: 1, nomeItem: "i", valorItem: 6, qtdItem: 1}];*/
	var listaContaSTR = localStorage.getItem('listaConta');
	if (listaContaSTR != undefined){
		var listaContaJSON = JSON.parse(listaContaSTR);
		$scope.listaUsersConta = listaContaJSON.listaUsers;
		$scope.listaItensConta = listaContaJSON.listaItens;

	}
	$scope.exibirTelaInicial = true;
	$scope.exibirTelaEntreUser = false;
	$scope.exibirTelaItens = false;
	$scope.exibirTelaResultado = false;
	$scope.exibirTelaHistorico = false;


	$scope.abrirTelaEntreUser = function(){

		$scope.exibirTelaInicial = false;
		$scope.exibirTelaEntreUser = true;
		$scope.exibirTelaItens = false;
		$scope.exibirTelaResultado = false;

		$scope.addUser = function(){
			console.log($scope.nomeUser);
			if($scope.nomeUser==""){
				return false;
			}
			var usuario ={
			id: $scope.seqIdUser,
			nomeUser: $scope.nomeUser,
			total: 0
			}
			$scope.listaUsers.push(usuario);
			$scope.listaUsersConta.push(usuario);
			$scope.seqIdUser++;
		//salvar listaUsers
		var listaJSON = {
			listaUsers: $scope.listaUsers
		}
		var listaSTR = JSON.stringify(listaJSON);

		localStorage.setItem('listaUsers', listaSTR);

		//salvar seqIdUsers
		var seqIdUserJSON = {
			seqIdUser: $scope.seqIdUser
		}
		var seqIdUserSTR = JSON.stringify(seqIdUserJSON);

		localStorage.setItem('seqIdUser', seqIdUserSTR);

	}

	$scope.excluir = function(id){
		$scope.edicao = id;
		for (item in $scope.listaUsers){
			if ($scope.edicao == $scope.listaUsers[item].id){
				$scope.listaUsers.splice(item,1);
			}
		}
	}
}
		$scope.abrirTelaItem = function(){
			$scope.exibirTelaInicial = false;
			$scope.exibirTelaEntreUser = false;
			$scope.exibirTelaItens = true;
			$scope.exibirTelaResultado = false;

			$scope.addItem= function(){
				if($scope.nomeItem==""){
					return false;
				}
				if($scope.valorItem==0){
					return false;
				}
				var itemC ={
					idItem: $scope.seqIdItem,
					userItem: parseInt($scope.userItem),
					nomeItem: $scope.nomeItem,
					valorItem: $scope.valorItem,
					qtdItem: $scope.qtdItem
				}

			$scope.listaItens.push(itemC);
			$scope.listaItensConta.push(itemC);
			$scope.seqIdItem++;


			//salvar listaItens
			var listaItemJSON = {
				listaItens: $scope.listaItens
			}
			var lisIdItemSTR = JSON.stringify(listaItemJSON);

			localStorage.setItem('listaItens', lisIdItemSTR);

			//salvar seqIdUsers
			var seqIdUserJSON = {
				seqIdItem: $scope.seqIdItem
			}
			var seqIdItemSTR = JSON.stringify(seqIdUserJSON);

			localStorage.setItem('seqIdItem', seqIdItemSTR);

		}
		}
		$scope.abrirTelaResultado = function(){
			$scope.exibirTelaInicial = false;
			$scope.exibirTelaEntreUser = false;
			$scope.exibirTelaItens = false;
			$scope.exibirTelaResultado = true;

			$scope.getTotal = function(){
		    var total = 0;
		    for(var i = 0; i < $scope.listaItens.length; i++){
		        var product = $scope.listaItens[i];
		        total += (product.valorItem * product.qtdItem);
		    }
			    return total;
			}

			$scope.salvarConta = function(){

				var listaContaJSON = {
					listaItens: $scope.listaItensConta,
					listaUsers: $scope.listaUsersConta
				};

				var listaContaSTR = JSON.stringify(listaContaJSON);

				localStorage.setItem('listaConta', listaContaSTR);
			}
		}

		$scope.abrirTelaHistorico = function(){
			$scope.exibirTelaInicial = false;
			$scope.exibirTelaEntreUser = false;
			$scope.exibirTelaItens = false;
			$scope.exibirTelaResultado = false;
			$scope.exibirTelaHistorico = true;


			$window.location.href = 'history.html';

		}
});



/*
$scope.listaCategorias = function(categoria_para_ser_comparada){
	var produtos = [];
	for(var i = 0; i < $scope.nome_da_lista_de_produtos.length; i++){
			var check = $scope.nome_da_lista_de_produtos[i];
			if(check.id == categoria_para_ser_comparada){
				produtos.push(check.nome_do_item);
			}
	}
		return produtos;
}*/
