require.config({
	paths: {
		'angular': '../../node_modules/angular/angular.min',
		'ngRoute': '../../node_modules/angular-route/angular-route.min',
		'firebase': 'lib/firebase',
		'angularfire': 'lib/angularfire.min',
		'googleMaps': 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCkdHvglJfuN8xzDw6IMPTEao_Ku-QxKQI'
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