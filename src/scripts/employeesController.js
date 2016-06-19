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
});