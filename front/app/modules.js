define(
	[
		'controllers/mainctrl',
		'controllers/aboutctrl',
		'controllers/contactctrl',
		'controllers/signupctrl',
		'controllers/navigationctrl',
		'controllers/signinctrl',
		'controllers/createquestctrl',
		'controllers/questlistctrl',
		'controllers/questpagectrl',
		'controllers/myquestctrl',
		'controllers/profilectrl'
	],
	function(mainCtrl, aboutCtrl, contactCtrl, signUpCtrl, navigationCtrl, signInCtrl, createQuestCtrl, questListCtrl, questPageCtrl, myQuestCtrl, profileCtrl) {
		var moduleName = 'quest.main';
		
		angular.module(moduleName, [])
			.controller('mainCtrl', mainCtrl)
			.controller('aboutCtrl', aboutCtrl)
			.controller('contactCtrl', contactCtrl)
			.controller('signUpCtrl', signUpCtrl)
			.controller('navigationCtrl', navigationCtrl)
			.controller('signInCtrl', signInCtrl)
			.controller('createQuestCtrl', createQuestCtrl)
			.controller('questListCtrl', questListCtrl)
			.controller('questPageCtrl', questPageCtrl)
			.controller('myQuestCtrl', myQuestCtrl)
			.controller('profileCtrl', profileCtrl);

	return moduleName;
});
