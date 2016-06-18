dashboardApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/assets/js/pages/home.htm', 
		controller: 'issuesController'
	})
	.when('/keyMetrics', {
		templateUrl: '/assets/js/pages/key_metrics.htm', 
		controller: 'keyMetricsController'
	})
	.when('/forecast/:days', {
		templateUrl: '/assets/js/pages/forecast.htm', 
		controller: 'forecastController'
	})
	.when('/employees', {
		templateUrl: '/assets/js/pages/employees.htm', 
		controller: 'employeesController'
	})
})