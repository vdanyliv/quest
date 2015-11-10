require.config({
	paths: {
		'angular': '../../node_modules/angular/angular.min',
		'ngRoute': '../../node_modules/angular-route/angular-route.min'
	},
	shim: {
		'ngRoute': {
			deps: ['angular']
		},
		'angular': {
    		exports: "angular"
		}
	}
});

require(
	[
		'angular',
		'ngRoute'
	], 
	function() {
		require(
			[
				'app'
			],
		 	function(app) {
		 		app.init();
		 	}
		);
	}
);