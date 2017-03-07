"use strict";

app.controller('NavCtrl', function($scope,$window){

	$scope.myTabYard = () => {
		$window.location.href = '#/my_tab_yard';
	};
});