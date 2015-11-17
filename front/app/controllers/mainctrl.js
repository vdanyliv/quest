define(function () {
 		var mainCtrl = function($scope, checkAuthFactory) {
 			$scope.auth = checkAuthFactory.checkAuth().$getAuth();

 			if ($scope.auth) {
 				$scope.name = $scope.auth.name === undefined ? $scope.auth.password.email : null;
 				$scope.greeting = 'Play';
 			}
 			else {
 				$scope.signup = 'Please sign up';
 				$scope.signin = 'SignIn'
 			}
 		}
 		return ['$scope', 'checkAuthFactory' , mainCtrl]
 	}
);