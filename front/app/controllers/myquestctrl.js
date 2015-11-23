define(function () {
 		var myQuestCtrl = function($scope, $route) {
 			$scope.$route = $route;
 		}
 		return ['$scope', '$route', myQuestCtrl]
 	}
);