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
							var promise = checkAuthFactory.checkAuth().$waitForAuth();

							promise.then(function(authStatus) {
								if (authStatus !== null) {
									window.location.href = '/';
								}
							});
						}]
					}
				});

				$locationProvider.html5Mode(true);
		}

	return ['$routeProvider', '$locationProvider', RouteManager];
});
