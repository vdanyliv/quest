define(
	[
		'controllers/mainctrl',
		'controllers/aboutctrl',
		'controllers/contactctrl',
		'controllers/signupctrl',
		'controllers/navigationctrl'
	],
	function(mainCtrl, aboutCtrl, contactCtrl, signUpCtrl, navigationCtrl) {
		var moduleName = 'quest.main';
		
		angular.module(moduleName, [])
			.controller('mainCtrl', mainCtrl)
			.controller('aboutCtrl', aboutCtrl)
			.controller('contactCtrl', contactCtrl)
			.controller('signUpCtrl', signUpCtrl)
			.controller('navigationCtrl', navigationCtrl);

	return moduleName;
});
