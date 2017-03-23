"use strict";

var app = angular.module('Astro', ['ngRoute'])
					.constant('apiUrl', "https://api-astro.herokuapp.com"); 

app.config(function($routeProvider,$locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider
	.when('/', {
		templateUrl: 'partials/main.html'
	})
	.when('/login', {
		templateUrl: 'partials/login.html',
		controller: 'AuthCtrl'
	})
	.when('/my_tab_yard', {
		templateUrl: 'partials/myTabYard.html',
		controller: 'TabYardCtrl'
	})
	.otherwise('/');
});