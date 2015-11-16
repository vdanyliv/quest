define(function () {
 		var contactCtrl = function($scope, $http, $firebaseArray) {
 			var ref = new Firebase('https://glowing-heat-7159.firebaseio.com/contactForm');
 			
 			$scope.form = $firebaseArray(ref);
 			$scope.isDataSaved = false;

 			$scope.submitForm = function() {
 				$scope.form.$add({
 					name: $scope.form.name,
 					email: $scope.form.email,
 					question: $scope.form.question
 				}).then(function() {
 					$scope.isDataSaved = true;
 				});
 			}
 		}
 		return ['$scope', '$http', '$firebaseArray', contactCtrl]
 	}
);