define(
	[
		'controllers/mainctrl',
		'controllers/aboutctrl',
		'controllers/contactctrl'
	],
	function(mainCtrl, aboutCtrl, contactCtrl) {
		var moduleName = 'quest.main';
		
		angular.module(moduleName, [])
			.controller('mainCtrl', mainCtrl)
			.controller('aboutCtrl', aboutCtrl)
			.controller('contactCtrl', contactCtrl);

	return moduleName;
});
