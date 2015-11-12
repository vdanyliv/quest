define(function () {
 		var aboutCtrl = function($scope, $route) {
 			$scope.$route = $route;
 		}
 		return ['$scope', '$route', aboutCtrl]
 	}
);