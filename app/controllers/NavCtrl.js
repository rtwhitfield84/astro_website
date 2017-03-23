"use strict";

app.controller('NavCtrl', function($scope,$window,$http, RootFactory){

	$scope.myTabYard = () => {
		$window.location.href = '#/my_tab_yard';
	};

	$scope.login = () => {
		$window.location.href = '#/login';	
	};

	$scope.logout = () => {
		$window.location.href = '#/';
		$window.location.reload();
	};
});