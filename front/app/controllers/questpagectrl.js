define(
	[
		'googleMaps'
	],
	function (googleMaps) {
 		var questPageCtrl = function($scope, $route) {
 			var initializeMap,
 				addNewPoint,
 				pointCounter = '123456789',
 				labelIndex = 0,
 				isMapInit = false,
 				infoWindowMock;

 			$scope.isQuestStart = false;

 			$scope.startQuest = function() {
 				$scope.isQuestStart = true;

 				if (!isMapInit) {
 					initializeMap();
 					isMapInit = true;
 				}
 			}

 			$scope.stopQuest = function() {
 				$scope.isQuestStart = false;
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

					marker.addListener('click', function() {
						infowindow.open(map, marker);
					});
					
					map.panTo(latLng);
			 	}

			 	infoWindowMock = '<form>' +
			 						'<label>Quest task: Enter Street name</label>' +
				    				'<input type="text" value="" placeholder="Type your answer!">' +
				    				'<br>' +
				    				'<input type="submit" value="Check Answer!">'
				    			'</form>';

				var infowindow = new google.maps.InfoWindow({
				    content: infoWindowMock
				});
			}

 		}
 		return ['$scope', '$route', questPageCtrl]
 	}
);