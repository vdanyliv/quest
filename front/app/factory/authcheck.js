define(
	function() {
		var checkAuthFactory = function($firebaseAuth) {
			var fac = {};

			fac.checkAuth = function() {
			    var ref = new Firebase("https://docs-sandbox.firebaseio.com", "example3");
			    return $firebaseAuth(ref);  
			}

			return fac;
		}

		return ['$firebaseAuth', checkAuthFactory];
	}
)