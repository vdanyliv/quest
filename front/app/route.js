define(function() {
		var RouteManager = function($routeProvider, $locationProvider) {
 			$routeProvider
 				.when('/', {
					templateUrl: 'views/main.html',
					controller: 'mainCtrl'
				})
				.when('/about', {
					templateUrl: 'views/about.html',
					controller: 'aboutCtrl'
				})
				.when('/contact', {
					templateUrl: 'views/contact.html',
					controller: 'contactCtrl'
				})
				.when('/signup', {
					templateUrl: 'views/signup.html',
					controller: 'signUpCtrl'
				});

				$locationProvider.html5Mode(true);
		}

	return ['$routeProvider', '$locationProvider', RouteManager];
});
