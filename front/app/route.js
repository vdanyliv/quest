define(function() {
		var RouteManager = function($routeProvider) {
 			$routeProvider
 				.when('/', {
					templateUrl: 'views/main.html',
					controller: 'mainCtrl'
				})
				.otherwise('/', {
					redirectTo: '/home'
				});
		}

	return ['$routeProvider', RouteManager];
});
