define(function () {
 		var contactCtrl = function($scope, $http) {
 			$scope.greeting = 'Its about page view!';
 			$scope.form = {};

 			$scope.submitForm = function() {
 				console.error('its test send!');
 			}
 		}
 		return ['$scope', '$http', contactCtrl]
 	}
);