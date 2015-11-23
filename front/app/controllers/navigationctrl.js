define(function () {
 		var navigationCtrl = function($scope, $location, checkAuthFactory) {
 			$scope.auth = checkAuthFactory.checkAuth().$getAuth();
 			$scope.$on('$routeChangeStart', function(next, current) { 
 				$scope.route = $location.url();
			});

			$scope.getClass = function(url) {
				if ($scope.route === url) {
					return 'active';
				}
			}
 		}

 		return ['$scope', '$location', 'checkAuthFactory', navigationCtrl];
 	}
);