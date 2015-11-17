define(function () {
 		var mainCtrl = function($scope, checkAuthFactory) {
 			$scope.auth = checkAuthFactory.authRequire();
 			$scope.status = $scope.auth;

 			console.error($scope.status)
 			
 		}
 		return ['$scope', 'checkAuthFactory' , mainCtrl]
 	}
);