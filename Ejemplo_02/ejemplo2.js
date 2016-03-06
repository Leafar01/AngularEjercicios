var varApp1=angular.module ('miApp1', []);

var varController1=function(){
	var scope=this;

	scope.sumar=function(){
		scope.suma=parseInt(scope.dato1)+parseInt(scope.dato2);
	}
}



varApp1.controller('miController1', varController1);