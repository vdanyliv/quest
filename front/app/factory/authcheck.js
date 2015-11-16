define(
	function() {
		var checkAuthFactory = function($firebaseAuth) {
			var fac = {};

			fac.checkAuth = function() {
			    var ref = new Firebase('https://glowing-heat-7159.firebaseio.com');
			    return $firebaseAuth(ref);  
			}

			return fac;
		}

		return ['$firebaseAuth', checkAuthFactory];
	}
)