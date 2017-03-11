"use strict";

app.controller('NavCtrl', function($scope,$window,$http, RootFactory){

	$scope.myTabYard = () => {
		$window.location.href = '#/my_tab_yard';
	};

	$scope.logout = () => {
		$window.location.reload();
		$window.location.href = '#/';
	};
});