define(function () {
 		var mainCtrl = function($scope, checkAuthFactory) {
 			$scope.auth = checkAuthFactory.checkAuth();

 			console.error($scope.auth.$getAuth());
 		}
 		return ['$scope', 'checkAuthFactory' , mainCtrl]
 	}
);