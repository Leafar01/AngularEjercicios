/**
 * 
 */

var nuevaApp3=angular.module('MiApp3',[]);
/*en lugar de poner nombre a la función y luego llamarla... podemos crearla dentro directamten*/
nuevaApp3.controller("LoloController3", 
		/*En lugar de llamar al scope ponemos directamente this*/
		function(){
		this.dato="Brutus";
	 	this.metodo=function(){
	 		this.dato="Popeye";
		}
	});





/*
 function($scope){
 	$scope.dato="Brutus";
 }
*/