define(function () {
 		var signInCtrl = function($scope, $route, checkAuthFactory, $window) {
 			$scope.authObj = checkAuthFactory.checkAuth();
 			$scope.message = null;
 			$scope.error = null;
 			$scope.authSuccess = false;
 			
 			$scope.signIn = function() {
	 			$scope.authObj.$authWithPassword({
					email: $scope.email,
					password: $scope.password
				}).then(function(authData) {
					$scope.authSuccess = true;
					console.log("Logged in as:", authData.uid);

					var runRedirectTimer = window.setTimeout(function() {
						window.location.href = '/';
						window.clearTimeout(runRedirectTimer);
					}, 2000);
				}).catch(function(error) {
					if (error.code === 'INVALID_EMAIL') {
						$scope.error = 'The specified email is not a valid email.';
					}
					else if (error.code === 'INVALID_PASSWORD') {
						$scope.error = 'The specified user account password is incorrect.';
					}
				});	
 			};
 		}
 		return ['$scope', '$route','checkAuthFactory', '$window', signInCtrl]
 	}
);