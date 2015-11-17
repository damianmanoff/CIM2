var app = angular.module('invernadero', ['ngRoute']);


app.config(function($routeProvider, $locationProvider) {

	$routeProvider
  
        .when('/maqueta', {
            templateUrl: "src/views/maqueta.html", 
            controller: 'Invernadero',
            reloadOnSearch: false
        })

});



