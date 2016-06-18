var dashboardApp = angular.module('dashboardApp', ['ngRoute', 'ngResource']);



dashboardApp.controller('issuesController', ['$scope',  '$resource', function($scope, $resource){

  	$scope.orderByField = 'closed_timestamp';
  	$scope.reverseSort = false;

    $scope.issuesAPI = $resource("https://corporate-dashboard.firebaseio.com/issues.json", { get: { method: "JSON" }});


	$scope.issuesResult = $scope.issuesAPI.query({});

	var response = $scope.issuesAPI.query({});

	console.log(response);

	console.log($scope.issuesResult);
}])

dashboardApp.controller('keyMetricsController',  [ '$scope', '$resource', '$routeParams', "$http", function($scope, $resource, $routeParams, $http){
 //  	$scope.orderByField = 'closed_timestamp';
 //  	$scope.reverseSort = false;

 //    $scope.keyMetricsAPI = $resource("https://corporate-dashboard.firebaseio.com/key_metrics.json", { get: { method: "JSON" }});


	// $scope.keyMetricsResult = $scope.keyMetricsAPI.query({});

	// console.log($scope.keyMetricsResult)

	var array = [];



    $http.get("https://corporate-dashboard.firebaseio.com/key_metrics.json")
    .then(function(response) {


        console.log(response.data);

        for (x in response.data){
        	var nestedArray = [];
        	nestedArray.push(response.data[x].date);
        	nestedArray.push(response.data[x].number_of_paying_customers);
        	array.push(nestedArray);
//         	console.log(response.data[x].date + " , "  + response.data[x].number_of_paying_customers
// );
        }
    });

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('date', 'X');
      data.addColumn('number', 'Dogs');

      data.addRows(array);

      var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Popularity'
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }
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