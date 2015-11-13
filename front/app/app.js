define(
	[
		'route',
		'modules'
	],

	function(routeManager, moduleManager) {
		var app = angular.module('quest', ['ngRoute', 'firebase', moduleManager]).config(routeManager);

		app.init = function() {
			angular.bootstrap(document.getElementsByTagName('body')[0], ['quest']);
		}
		
		return app;
	}
);