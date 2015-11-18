define(function() {
		var RouteManager = function($routeProvider, $locationProvider) {
 			$routeProvider
 				.when('/', {
					templateUrl: 'views/main.html',
					controller: 'mainCtrl'
				})
				.when('/about', {
					templateUrl: 'views/about.html',
					controller: 'aboutCtrl',
					resolve: {
						"currentAuth": ["checkAuthFactory", function(checkAuthFactory) {
							return checkAuthFactory.checkAuth().$waitForAuth();
						}]
					}
				})
				.when('/contact', {
					templateUrl: 'views/contact.html',
					controller: 'contactCtrl'
				})
				.when('/signup', {
					templateUrl: 'views/signup.html',
					controller: 'signUpCtrl',
					resolve: {
						"currentAuth": ["checkAuthFactory", function(checkAuthFactory) {
							return checkAuthFactory.blockAccessForRegitered();
						}]
					}
				})
				.when('/signin', {
					templateUrl: 'views/signin.html',
					controller: 'signInCtrl',
					resolve: {
						"currentAuth": ["checkAuthFactory", function(checkAuthFactory) {
							return checkAuthFactory.blockAccessForRegitered();
						}]
					}
				});

				$locationProvider.html5Mode(true);
		}

	return ['$routeProvider', '$locationProvider', RouteManager];
});
