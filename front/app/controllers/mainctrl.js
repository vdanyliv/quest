define(function () {
 		var mainCtrl = function($scope, $route, $routeParams, $location) {
 			$scope.greeting = 'Hola!';
 			$scope.params = $routeParams;
 		}
 		return ['$scope', '$route', '$routeParams', '$location', mainCtrl]
 	}
);