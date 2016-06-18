var dashboardApp = angular.module('dashboardApp', ['ngRoute', 'ngResource', 'zingchart-angularjs', 'uiGmapgoogle-maps']);



dashboardApp.controller('issuesController', ['$scope',  '$resource', function($scope, $resource){

  	$scope.orderByField = 'closed_timestamp';
  	$scope.reverseSort = false;

    $scope.issuesAPI = $resource("https://corporate-dashboard.firebaseio.com/issues.json", { get: { method: "JSON" }});


	$scope.issuesResult = $scope.issuesAPI.query({});

	var response = $scope.issuesAPI.query({});

	console.log(response);

	console.log($scope.issuesResult);
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