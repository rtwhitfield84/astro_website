"use strict";

var app = angular.module('Astro', ['ngRoute']); 

app.config(function($routeProvider,$locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider
	.when('/', {
		templateUrl: 'partials/main.html',
		controller: 'MainCtrl'
	})
	.when('/login', {
		templateUrl: 'partials/login.html',
		controller: 'LoginCtrl'
	})
	.when('/my_tab_yard', {
		templateUrl: 'partials/myTabYard.html',
		controller: 'TabYardCtrl'
	})
	.otherwise('/');
});