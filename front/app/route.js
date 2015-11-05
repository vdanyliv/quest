define(function() {
		var RouteManager = function($routeProvider) {
 			$routeProvider
 				.when('/', {
					templateUrl: 'index.html',
					controller: 'mainCtrl'
				})
				.otherwise('/', {
					redirectTo: '/'
				});
		}

	return ['$routeProvider', RouteManager];
});
