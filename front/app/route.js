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
				})
				.when('/create-quest', {
					templateUrl: 'views/createquest.html',
					controller: 'createQuestCtrl',
					resolve: {
						"currentAuth": ["checkAuthFactory", function(checkAuthFactory) {
							return checkAuthFactory.isUserAuth();
						}]
					}
				})
				.when('/quest-list', {
					templateUrl: 'views/questlist.html',
					controller: 'questListCtrl',
					resolve: {
						"currentAuth": ["checkAuthFactory", function(checkAuthFactory) {
							return checkAuthFactory.isUserAuth();
						}]
					}
				})
				.when('/page', {
					templateUrl: 'views/questpage.html',
					controller: 'questPageCtrl',
					resolve: {
						"currentAuth": ["checkAuthFactory", function(checkAuthFactory) {
							return checkAuthFactory.isUserAuth();
						}]
					}
				})
				.when('/my-quest', {
					templateUrl: 'views/myquest.html',
					controller: 'myQuestCtrl',
					resolve: {
						"currentAuth": ["checkAuthFactory", function(checkAuthFactory) {
							return checkAuthFactory.isUserAuth();
						}]
					}
				})
				.when('/profile', {
					templateUrl: 'views/profile.html',
					controller: 'profileCtrl',
					resolve: {
						"currentAuth": ["checkAuthFactory", function(checkAuthFactory) {
							return checkAuthFactory.isUserAuth();
						}]
					}
				})
				.when('/edit-profile', {
					templateUrl: 'views/editprofile.html',
					controller: 'profileCtrl',
					resolve: {
						"currentAuth": ["checkAuthFactory", function(checkAuthFactory) {
							return checkAuthFactory.isUserAuth();
						}]
					}
				});
				$locationProvider.html5Mode(true);
		}

	return ['$routeProvider', '$locationProvider', RouteManager];
});
