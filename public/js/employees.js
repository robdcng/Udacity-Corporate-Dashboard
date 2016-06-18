// dashboardApp.controller('employeesController', ['$scope',  '$resource', '$window', function($scope, $resource, $window){


//                 $scope.map = {
//                         center: {
// 						latitude: 56.162939,
//                                 longitude: 10.203921
//                         },
//                         zoom: 14
//                 };
//                 $scope.options = {
//                         scrollwheel: true
//                 };
//                 $scope.coordsUpdates = 0;
//                 $scope.dynamicMoveCtr = 0;
//                  $scope.markers = [];


// }])

// dashboardApp.factory("Markers", function(){
//   var Markers = [
//     {
//       "id": "0",
//       "coords": {
//         "latitude": "45.5200",
//         "longitude": "-122.6819"
//       },
//       "window": {
//         "title": "Portland, OR"
//       }
//     },
//     {
//       "id": "1",
//       "coords": {
//         "latitude": "40.7903",
//         "longitude": "-73.9597"
//       },
//       "window" : {
//         "title": "Manhattan New York, NY"
//       }
//     }
//   ];
//   return Markers;
// });

dashboardApp.controller("employeesController",function($scope,$http){

	$scope.markers = '';

	    $http.get("https://corporate-dashboard.firebaseio.com/locations.json")
    .then(function(response) {


        for (x in response.data){

        	$scope.markers = response.data;
        }
    });

  $scope.map = { 
    center: { latitude: 39.8282, longitude: -98.5795 }, 
    zoom: 2
  };
  // $scope.markers = Markers;
});