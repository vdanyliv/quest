define(
	[
		'angular',
		'ngRoute'
	],

	function(angular, ngRoute) {
		var app = angular.module('quest', ['ngRoute']);

		app.init = function() {
			angular.bootstrap(document, ['quest']);
		}

		return app;
	}
);