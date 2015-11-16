define(function () {
 		var navigationCtrl = function($scope, $location, checkAuthFactory) {
 			$scope.auth = checkAuthFactory.checkAuth();
 			
 			// any time auth status updates, add the user data to scope
		    $scope.auth.$onAuth(function(authData) {
		      $scope.authData = authData;
		      console.error(authData);
		    });

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