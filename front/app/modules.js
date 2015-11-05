define(
	[
		'controllers/mainctrl'
	],
	function(mainCtrl) {
		var moduleName = 'quest.main';
		
		angular.module(moduleName, [])
			.controller('mainCtrl', mainCtrl);

	return moduleName;
});
