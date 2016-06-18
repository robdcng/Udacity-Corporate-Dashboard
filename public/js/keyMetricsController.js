dashboardApp.controller('keyMetricsController',  [ '$scope', '$resource', '$routeParams', "$http", function($scope, $resource, $routeParams, $http){
 //  	$scope.orderByField = 'closed_timestamp';
 //  	$scope.reverseSort = false;

 //    $scope.keyMetricsAPI = $resource("https://corporate-dashboard.firebaseio.com/key_metrics.json", { get: { method: "JSON" }});


	// $scope.keyMetricsResult = $scope.keyMetricsAPI.query({});

	// console.log($scope.keyMetricsResult)

	var array = [];

	var customerArray = [];
	var dateArray = [];

    $http.get("https://corporate-dashboard.firebaseio.com/key_metrics.json")
    .then(function(response) {

        $scope.myJson.series[0].values = $scope.myJson.series[0].values.concat(response.data.values);

        console.log(response);

        for (x in response.data){
        	customerArray.push(response.data[x].number_of_paying_customers)
        	dateArray.push(response.data[x].date);
        }
    });

  $scope.myJson = {
    type: "line", 
    title: {
      textAlign:'left',
    },
    crosshairX : {
      lineColor : "#b6b6b6",
      trigger : "move",
      lineStyle : 'dashed',
      marker : {
        visible : true,
      size : 4
      },
      scaleLabel : {
        bold : true,
        backgroundColor : "#fff",
        fontColor : "#474747",
        fontSize : "16px",
        callout : false,
        paddingTop : 2,
        
      },
      plotLabel : {
        backgroundColor : "white",
        borderColor : "#bababa",
        borderRadius : "5px",
        bold : true,
        fontSize : "12px",
        fontColor : "#2f2f2f",
        textAlign : 'right',
        padding : '10px',
        shadow : true,
        shadowAlpha : 0.2,
        shadowBlur : 5,
        shadowDistance : 4,
        shadowColor : "#a1a1a1",
        
      }
    },
    plot : {
      tooltip : {
        visible : false
      },
      aspect : 'spline',
      marker : {
        backgroundColor : "white",
        borderWidth : "2px",
      },
      hoverMarker : {
        backgroundColor : 'none',
        size : 10
      }
    },
    scaleX : {
      lineColor : "#E3E8E9",
      fontColor : "#879CAB",
      guide :{
        visible : true,
        lineWidth : "1px",
        lineColor : "#E3E8E9",
        lineStyle : "solid"
      },
      tick : {
        visible : false
      },
      labels : dateArray
    },
    scaleY : {
      lineColor : "#E3E8E9",
      fontColor : "#879CAB",
      guide :{
        visible : true,
        lineWidth : "1px",
        lineColor : "#E3E8E9",
        lineStyle : "solid"
      },
       tick : {
        visible : false
      }
    },
    series : [
        {
            values : customerArray,
            text : "Paying Customers",
            lineColor : "#00ACF2",
            marker : {
        borderColor : "#00ACF2"
      }
        }
    ]
};
}])