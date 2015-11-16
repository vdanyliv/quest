define(function () {
 		var navigationCtrl = function($scope, $location) {
 			$scope.$on('$routeChangeStart', function(next, current) { 
 				$scope.route = $location.url();
			});

			$scope.getClass = function(url) {
				if ($scope.route === url) {
					return 'active';
				}
			}
 		}

 		return ['$scope', '$location', navigationCtrl];
 	}
);