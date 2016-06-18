var dashboardApp = angular.module('dashboardApp', ['ngRoute', 'ngResource', 'zingchart-angularjs']);



dashboardApp.controller('issuesController', ['$scope',  '$resource', function($scope, $resource){

  	$scope.orderByField = 'closed_timestamp';
  	$scope.reverseSort = false;

    $scope.issuesAPI = $resource("https://corporate-dashboard.firebaseio.com/issues.json", { get: { method: "JSON" }});


	$scope.issuesResult = $scope.issuesAPI.query({});

	var response = $scope.issuesAPI.query({});

	console.log(response);

	console.log($scope.issuesResult);
}])

var cities = [
    {
        city : 'Toronto',
        desc : 'This is the best city in the world!',
        lat : 43.7000,
        long : -79.4000
    },
    {
        city : 'New York',
        desc : 'This city is aiiiiite!',
        lat : 40.6700,
        long : -73.9400
    },
    {
        city : 'Chicago',
        desc : 'This is the second best city in the world!',
        lat : 41.8819,
        long : -87.6278
    },
    {
        city : 'Los Angeles',
        desc : 'This city is live!',
        lat : 34.0500,
        long : -118.2500
    },
    {
        city : 'Las Vegas',
        desc : 'Sin City...\'nuff said!',
        lat : 36.0800,
        long : -115.1522
    }
];


dashboardApp.controller('employeesController', ['$scope',  '$resource', '$window', function($scope, $resource, $window){




}])



dashboardApp.directive("weatherReport", function(){
	return {
		restrict: 'E', 
		templateUrl: 'directives/weatherReport.html', 
		replace: true, 
		scope: {
			
		}
	}
})