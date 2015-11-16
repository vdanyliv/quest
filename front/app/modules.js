define(
	[
		'controllers/mainctrl',
		'controllers/aboutctrl',
		'controllers/contactctrl',
		'controllers/signupctrl'
	],
	function(mainCtrl, aboutCtrl, contactCtrl, signUpCtrl) {
		var moduleName = 'quest.main';
		
		angular.module(moduleName, [])
			.controller('mainCtrl', mainCtrl)
			.controller('aboutCtrl', aboutCtrl)
			.controller('contactCtrl', contactCtrl)
			.controller('signUpCtrl', signUpCtrl);

	return moduleName;
});
