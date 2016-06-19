dashboardApp.controller("keyMetricsController",["$scope","$resource","$routeParams","$http",function(o,e,r,l){o.customerArray=[],o.dateArray=[],o.reportedIssues=[],o.response="",l.get("https://corporate-dashboard.firebaseio.com/key_metrics.json").then(function(e){for(x in e.data)o.customerArray.push(e.data[x].number_of_paying_customers),o.dateArray.push(e.data[x].date),o.reportedIssues.push(e.data[x].reported_issues);console.log(o.customerArray)}),o.myJson={type:"line",title:{textAlign:"left"},crosshairX:{lineColor:"#b6b6b6",trigger:"move",lineStyle:"dashed",marker:{visible:!0,size:4},scaleLabel:{bold:!0,backgroundColor:"#fff",fontColor:"#474747",fontSize:"16px",callout:!1,paddingTop:2},plotLabel:{backgroundColor:"white",borderColor:"#bababa",borderRadius:"5px",bold:!0,fontSize:"12px",fontColor:"#2f2f2f",textAlign:"right",padding:"10px",shadow:!0,shadowAlpha:.2,shadowBlur:5,shadowDistance:4,shadowColor:"#a1a1a1"}},plot:{tooltip:{visible:!1},aspect:"spline",marker:{backgroundColor:"white",borderWidth:"2px"},hoverMarker:{backgroundColor:"none",size:10}},scaleX:{lineColor:"#E3E8E9",fontColor:"#879CAB",guide:{visible:!0,lineWidth:"1px",lineColor:"#E3E8E9",lineStyle:"solid"},tick:{visible:!1},labels:o.dateArray},scaleY:{lineColor:"#E3E8E9",fontColor:"#879CAB",guide:{visible:!0,lineWidth:"1px",lineColor:"#E3E8E9",lineStyle:"solid"},tick:{visible:!1}},series:[{values:o.customerArray,text:"Paying Customers",lineColor:"#00ACF2",marker:{borderColor:"#00ACF2"}}]},o.myJson2={type:"bar",title:{textAlign:"left"},crosshairX:{lineColor:"#b6b6b6",trigger:"move",lineStyle:"dashed",marker:{visible:!0,size:4},scaleLabel:{bold:!0,backgroundColor:"#fff",fontColor:"#474747",fontSize:"16px",callout:!1,paddingTop:2},plotLabel:{backgroundColor:"white",borderColor:"#bababa",borderRadius:"5px",bold:!0,fontSize:"12px",fontColor:"#2f2f2f",textAlign:"right",padding:"10px",shadow:!0,shadowAlpha:.2,shadowBlur:5,shadowDistance:4,shadowColor:"#a1a1a1"}},plot:{tooltip:{visible:!1},aspect:"spline",marker:{backgroundColor:"white",borderWidth:"2px"},hoverMarker:{backgroundColor:"none",size:10}},scaleX:{lineColor:"#E3E8E9",fontColor:"#879CAB",guide:{visible:!0,lineWidth:"1px",lineColor:"#E3E8E9",lineStyle:"solid"},tick:{visible:!1},labels:o.dateArray},scaleY:{lineColor:"#E3E8E9",fontColor:"#879CAB",guide:{visible:!0,lineWidth:"1px",lineColor:"#E3E8E9",lineStyle:"solid"},tick:{visible:!1}},series:[{values:o.reportedIssues,text:"Paying Customers",lineColor:"#00ACF2",marker:{borderColor:"#00ACF2"}}]}}]);