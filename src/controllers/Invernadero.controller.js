app.controller('Invernadero', Invernadero);

Invernadero.$inject = [
	'$scope', 
	'$rootScope'
];

function Invernadero($scope, $rootScope){	

	$scope.escala = 50;

	$scope.settings = {
		"ancho" : 20,
		"alto" : 10,
		"sensores" : [
			{
				"posicion" : {
					"x" : 0,
					"y" : 0
				},
				"estado" : "A"
			},{
				"posicion" : {
					"x" : 20,
					"y" : 5
				},
				"estado" : "I"
			}
		],
		"ventiladores" : [
			{
				"posicion" : {
					"x" : 0,
					"y" : 10
				},
				"estado" : "A"
			},{
				"posicion" : {
					"x" : 10,
					"y" : 10
				},
				"estado" : "I"
			}
		]
	};
	
	$scope.getX = function(obj){
		return $scope.escala * obj.posicion.x - 25;
	}
	$scope.getY = function(obj){
		return $scope.escala * obj.posicion.y - 25;
	}
	$scope.getAlto = function(){
		console.log($scope.settings.alto * $scope.escala)
		return ($scope.settings.alto * $scope.escala);
	}	
	$scope.getAncho = function(){
		console.log($scope.settings.ancho * $scope.escala)
		return ($scope.settings.ancho * $scope.escala);
	}
	$scope.search = function() {

		searchResults_epposService.search(
				$scope.config.filters, 
				$scope.config.resource

			).then(function(){
				$scope.config.results=searchResults_epposService.config.results;
			}
		);
		
	}
	
}

