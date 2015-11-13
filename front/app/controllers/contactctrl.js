define(function () {
 		var contactCtrl = function($scope, $http, $firebaseArray) {
 			var ref = new Firebase('https://glowing-heat-7159.firebaseio.com/contactForm');
 			
 			$scope.form = $firebaseArray(ref);

 			$scope.submitForm = function() {
 				$scope.form.$add({
 					name: $scope.form.name,
 					email: $scope.form.email,
 					question: $scope.form.question
 				});
 			}
 		}
 		return ['$scope', '$http', '$firebaseArray', contactCtrl]
 	}
);