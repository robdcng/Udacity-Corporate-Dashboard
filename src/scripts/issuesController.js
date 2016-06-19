dashboardApp.controller('issuesController', ['$scope',  '$resource', function($scope, $resource){

  	$scope.orderByField = 'closed_timestamp';
  	$scope.reverseSort = false;

    $scope.issuesAPI = $resource("https://corporate-dashboard.firebaseio.com/issues.json", { get: { method: "JSON" }});


	$scope.issuesResult = $scope.issuesAPI.query({});

	var response = $scope.issuesAPI.query({});

	console.log(response);

	console.log($scope.issuesResult);
}])
