define(function () {
 		var signUpCtrl = function($scope, $firebaseAuth) {
 			var ref = new Firebase('https://glowing-heat-7159.firebaseio.com'),
 				auth = $firebaseAuth(ref);
 			
 			$scope.authSuccess = false;

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
					}).then(function() {
						$scope.authSuccess = true;
						var runRedirectTimer = window.setTimeout(function() {
							window.location.href = '/';
							window.clearTimeout(runRedirectTimer);
						}, 2000);
					});
	 			}).catch(function(error) {
			        $scope.error = error.message;
			    });
 			}
 		}
 		return ['$scope', '$firebaseAuth', signUpCtrl]
 	}
);