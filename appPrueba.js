var miModulo = angular.module('miAplicacion', ['ngRoute']);

miModulo.controller('miTitulo', function($scope){
	$scope.titulo ='Prueba Angular'
});

miModulo.config(function($routeProvider) {

$routeProvider
	.when("/", {
		templateUrl : "templates/pagina1.html",
		controller : "controllerMain"
	})
	.when("/paginados", {
		templateUrl : "templates/pagina2.html",
		controller : "controllerpagina2"
	})
	.when("/paginatres", {
		templateUrl : "templates/pagina3.html",
		controller : "controllerpagina3"
	})

	.otherwise({ reditrectTo : "/" });
});

miModulo.controller('controllerMain', function ($scope){
	$scope.paginaUNO ='Primera página'
});

miModulo.controller('controllerpagina2', function ($scope){
	$scope.paginaDOS ='Segunda página'
});


miModulo.controller('controllerpagina3', function ($scope){
	$scope.paginaTRES ='tercetra página'
});
