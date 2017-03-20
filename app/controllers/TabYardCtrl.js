"use strict";

app.controller('TabYardCtrl', function($scope, $http, $location, RootFactory,TabStorage){

	$scope.tabs = [];

	let getTabs = () => {
	return new Promise((resolve, reject) => {
		$http({
			url: "https://api-astro.herokuapp.com/tabs/",
			method: 'GET',
			headers: {
				'Authorization': "Token " + RootFactory.getToken()
			}
		}).success((tabs) => {
			console.log("tabsdata", tabs);
			console.log("tabsdata", tabs.results);
			$scope.tabs = tabs.results;
			// $scope.$apply();
			resolve(tabs);
		}).error((err) => {
			reject(err);
		});
	});
	};

	$scope.delete = ($event) => {
		console.log("$event",$event.target.id);
		let id = $event.target.id;
		TabStorage.deleteFromTabYard(id)
		.then((res) => {
			console.log("res from del", res.data);
			getTabs();
		});
	};
	getTabs();

	    // RootFactory.getApiRoot()
	    //   .then(
	    //     root => 
	    //       $http({
	    //         url: `${root.tabs}`,
	    //         headers: {
	    //           'Authorization': "Token " + RootFactory.getToken()
	    //         }
	    //       })
	    //       .then(
	    //         res => $scope.tabs = res.data.results,
	    //         err => console.log
	    //       )
	    //     ,err => console.log
	    //   );
	  });
