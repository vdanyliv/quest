define(function () {
 		var questListCtrl = function($scope, $route) {
 			$scope.$route = $route;
 		}
 		return ['$scope', '$route', questListCtrl]
 	}
);