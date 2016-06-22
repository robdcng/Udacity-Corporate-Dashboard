dashboardApp.controller('issuesController', ['$scope',  '$resource', "$timeout", function($scope, $resource, $timeout){

  	$scope.orderByField = 'closed_timestamp';
  	$scope.reverseSort = false;

    $scope.issuesAPI = $resource("https://corporate-dashboard.firebaseio.com/issues.json", { get: { method: "JSON" }});


	$scope.issuesResult = $scope.issuesAPI.query({});

	var poll = function() {
        $timeout(function() {

        	$scope.issuesResult = "";

		    $scope.issuesAPI = $resource("https://corporate-dashboard.firebaseio.com/issues.json", { get: { method: "JSON" }});

			$scope.issuesResult = $scope.issuesAPI.query({});
			console.log("getting results");
            poll();
        }, 100000);
    };     
   poll();


	var response = $scope.issuesAPI.query({});

	console.log(response);

	console.log($scope.issuesResult);
}])
