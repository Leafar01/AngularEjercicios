var miAppVar = angular.module ('miApp', []);

var control=function(){
	var scope=this;
	scope.comprobar=function(){
		scope.years=parseInt(scope.edad);
	};
};




miAppVar.controller('miController', control);