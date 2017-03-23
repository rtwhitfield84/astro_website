"use strict";

app.controller('TabYardCtrl', function($scope, $http, $location, RootFactory,TabStorage,$rootScope){

	$scope.tabs = [];
	// $scope.loggedIn = true;

	TabStorage.getTabs()
	.then((tabs) => {
	$scope.tabs = tabs.results;
	let id = tabs.results[0].user[0];
	TabStorage.getCurrentUser(id)
	.then((user) =>{
		console.log("user", user.username);
		// $scope.$apply();
		$rootScope.currentUser = user; 
		console.log("$rootScope.currentUser", $rootScope.currentUser);
		$rootScope.$apply();
		// $scope.user = user.username;
		// console.log("user.", user.username);
	});
});


	$scope.delete = ($event) => {
		console.log("EVENT", $event);
		console.log("$eventtaerget",$event.target.id);
		let id = $event.target.id;
		TabStorage.deleteFromTabYard(id)
		.then((res) => {
			console.log("res from del", res.data);
			TabStorage.getTabs()
			.then((tabs) => {
				$scope.tabs = tabs.results;
				$scope.$apply();
			});
		});
	};

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
