require.config({
	paths: {
		'angular': '../../node_modules/angular/angular.min',
		'jquery': '../../node_modules/jquery/dist/jquery.min'
	},
	shim: {
		angular: {
			exports: 'angular'
		},
		jquery: {
			exports: '$'
		}
	},

	require(['app'], function (app) {
		app.init();
	});
});