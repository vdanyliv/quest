define(function () {
 		var profileCtrl = function($scope, $route, checkAuthFactory) {
 			$scope.userDetails = checkAuthFactory.userInfo();
 			$scope.$route = $route;

 			$scope.userEmail = $scope.userDetails.password.email;
 			$scope.img = $scope.userDetails.password.profileImageURL;
 		}
 		return ['$scope', '$route', 'checkAuthFactory', profileCtrl]
 	}
);