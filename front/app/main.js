require.config({
	paths: {
		'angular': '../../node_modules/angular/angular.min',
		'jquery': '../../node_modules/jquery/dist/jquery.min',
		'app': 'app',
		'ngRoute': '../../node_modules/angular-route/angular-route.min'
	},
	shim: {
		angular: {
			exports: 'angular'

		},
		ngRoute: {
			exports: 'ngRoute'
		},
		jquery: {
			exports: 'jq'
		}
	}
});

require(['app'], function (app) {
	app.init();
});