"use strict";

var app = angular.module('Astro', ['ngRoute']); 

app.config(function($routeProvider,$locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider
	.when('/', {
		templateUrl: 'partials/main.html',
		controller: 'MainCtrl'
	})
	.otherwise('/');
});