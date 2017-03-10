"use strict";

var app = angular.module('Astro', ['ngRoute'])
					.constant('apiUrl', "http://localhost:8000"); 

app.config(function($routeProvider,$locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider
	.when('/', {
		templateUrl: 'partials/main.html',
		controller: 'MainCtrl'
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