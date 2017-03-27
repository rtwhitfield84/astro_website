"use strict";

app.controller('TabYardCtrl', function($scope, $http, $location,TabStorage,$rootScope){

	$scope.tabs = [];

//gets users tabs from db
	TabStorage.getTabs()
	.then((tabs) => {
	$scope.tabs = tabs.results;
	let id = tabs.results[0].user[0];
	TabStorage.getCurrentUser(id)
	.then((user) =>{
		$rootScope.currentUser = user; 
		$rootScope.$apply();
	});
});


	$scope.delete = ($event) => {
		let id = $event.target.id;
		TabStorage.deleteFromTabYard(id)
		.then((res) => {
			TabStorage.getTabs()
			.then((tabs) => {
				$scope.tabs = tabs.results;
				$scope.$apply();
			});
		});
	};
});
