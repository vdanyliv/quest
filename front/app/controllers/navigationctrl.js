define(function () {
 		var navigationCtrl = function($scope, $route, $routeParams, $location, $rootScope) {
 			$scope.greeting = 'Hola!';
 		
 			$scope.$on('$routeChangeStart', function(next, current) { 
 				$scope.route = $location.url();
			});

			$scope.getClass = function(url) {
				if ($scope.route === url) {
					return 'active';
				}
			}
 		}
 		return ['$scope', '$route', '$routeParams', '$location', '$rootScope', navigationCtrl]
 	}
);