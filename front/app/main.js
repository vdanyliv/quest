require.config({
	paths: {
		'angular': '../../node_modules/angular/angular.min',
		'ngRoute': '../../node_modules/angular-route/angular-route.min',
		'firebase': 'lib/firebase',
		'angularfire': 'lib/angularfire.min'
	},
	shim: {
		'angularfire': {
			deps: ['angular']
		},
		'firebase': {
			deps: ['angular']
		},
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
		'ngRoute',
		'firebase',
		'angularfire'
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