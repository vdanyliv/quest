define(
	[
		'googleMaps'
	],
	function (googleMaps) {
 		var createQuestCtrl = function($scope, $route) {
 			var initialize,
 				initializeMap,
 				addNewPoint,
 				setPointName,
 				pointCounter = '123456789',
 				labelIndex = 0;

 			$scope.pointObject = [];

 			initialize = function() {
 				initializeMap();
 			}
			
			
			initializeMap = function() {
				var map;

			 	map = new google.maps.Map(document.getElementById('map'), {
			   		center: {lat: -34.397, lng: 150.644},
			   		zoom: 12
			 	});

			 	if (navigator.geolocation) {
				     navigator.geolocation.getCurrentPosition(function (position) {
				         initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
				         map.setZoom(12);
				         map.setCenter(initialLocation);
				     });
				 }

			 	map.addListener('click', function(e) {
			 		placeMarkerAndPanTo(e.latLng, map);
			 	});

			 	function placeMarkerAndPanTo(latLng, map) {
			 		var marker = new google.maps.Marker({
					    position: latLng,
					    map: map,
					    title: (function() {
					    	var pointName = prompt("Please enter point name:");

					    	return 'Description: ' + pointName;
					    }()),
					    label: pointCounter[labelIndex++ % pointCounter.length]
					});
					
					map.panTo(latLng);
					addNewPoint(marker);
			 	}
			}

			addNewPoint = function(marker) {
				$scope.$apply(function () {
	           		$scope.pointObject.push({
						label: marker.label,
						title: marker.title
					});
	        	});
			}

			initialize();
 		}
 		return ['$scope', '$route', createQuestCtrl]
 	}
);