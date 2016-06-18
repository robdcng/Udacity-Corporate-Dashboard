dashboardApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/assets/js/pages/home.htm', 
		controller: 'issuesController'
	})
	.when('/forecast', {
		templateUrl: '/assets/js/pages/key_metrics.htm', 
		controller: 'keyMetricsController'
	})
	.when('/forecast/:days', {
		templateUrl: '/assets/js/pages/forecast.htm', 
		controller: 'forecastController'
	})
})