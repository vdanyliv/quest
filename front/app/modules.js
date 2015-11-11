define(
	[
		'controllers/mainctrl',
		'controllers/aboutctrl'
	],
	function(mainCtrl, aboutCtrl) {
		var moduleName = 'quest.main';
		
		angular.module(moduleName, [])
			.controller('mainCtrl', mainCtrl)
			.controller('aboutCtrl', aboutCtrl);

	return moduleName;
});
