define(
	[
		'route',
		'modules',
		'factory/authcheck'
	],

	function(routeManager, moduleManager, checkAuthFactory) {
		var app = angular.module('quest', ['ngRoute', 'firebase', moduleManager])
						.config(routeManager)
						.factory('checkAuthFactory', checkAuthFactory);

		app.init = function() {
			angular.bootstrap(document.getElementsByTagName('body')[0], ['quest']);
		}
		
		return app;
	}
);