dashboardApp.controller("employeesController",function(o,e){o.markers="",e.get("https://corporate-dashboard.firebaseio.com/locations.json").then(function(e){for(x in e.data)o.markers=e.data}),o.map={center:{latitude:39.8282,longitude:-98.5795},zoom:2}});