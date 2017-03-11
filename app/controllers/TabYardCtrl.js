"use strict";

app.controller('TabYardCtrl', function($scope, $http, $location, RootFactory){

	$scope.tabs = [];

	    RootFactory.getApiRoot()
	      .then(
	        root => 
	          $http({
	            url: `${root.tabs}`,
	            headers: {
	              'Authorization': "Token " + RootFactory.getToken()
	            }
	          })
	          .then(
	            res => $scope.tabs = res.data.results,
	            err => console.log
	          )
	        ,err => console.log
	      );
	  });
