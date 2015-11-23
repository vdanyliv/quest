define(
	function() {
		var checkAuthFactory = function($firebaseAuth) {
			var fac = {},
				ref = new Firebase('https://glowing-heat-7159.firebaseio.com');

			fac.checkAuth = function() {
			    return $firebaseAuth(ref);  
			}

			fac.authRequire = function() {
				var authObject = $firebaseAuth(ref);
				
				return authObject.$requireAuth();
			}

			fac.blockAccessForRegitered = function() {
				var authObject = $firebaseAuth(ref),
					authPromise = authObject.$waitForAuth();

				return authPromise.then(function(authStatus) {
					if (authStatus !== null) {
						window.location.href = '/';
					}
				});
			}

			fac.isUserAuth = function() {
				var authObject = $firebaseAuth(ref),
					authPromise = authObject.$waitForAuth();

				return authPromise.then(function(authStatus) {
					if (authStatus === null) {
						window.location.href = '/';
					}
				});	
			}

			fac.userInfo = function() {
				var authObject = $firebaseAuth(ref),
					userObject = authObject.$getAuth();

				return userObject;

			}

			return fac;
		}

		return ['$firebaseAuth', checkAuthFactory];
	}
)