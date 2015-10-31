define([],
	function() {
		var app, appName = 'quest.builder';

		/*----------  start angular application  ----------*/
		app = angular.module(appName, ['ngSanitize']);

		angular.bootstrap(document.getElementsByTagName("body")[0], [ appName ]);

		return app;
	}
);