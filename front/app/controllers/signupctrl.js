define(function () {
 		var signUpCtrl = function($scope, $firebaseAuth) {
 			var ref = new Firebase('https://glowing-heat-7159.firebaseio.com'),
 				auth = $firebaseAuth(ref);

 			$scope.createNewUser = function() {
 				$scope.message = null;
 				$scope.error = null;

 				auth.$createUser({
 					email: $scope.email,
 					password: $scope.password
	 			}).then(function(userData) {
					auth.$authWithPassword({
					  email: $scope.email,
					  password: $scope.password
					});
	 			}).catch(function(error) {
			        $scope.error = error.code;
			    });
 			}
 		}
 		return ['$scope', '$firebaseAuth', signUpCtrl]
 	}
);