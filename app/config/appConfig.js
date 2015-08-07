/**
	*
	* AppRoutes.js
	*
	*
	*	This file contens all config for app
	* routes, httpProviders and others..
	* 
	* @dependency - $routeProvider
	* @dependency - $httpProvider
	*
**/
(function() {
	'use strict';

	angular
		.module('app')
		.config(config);

		//inject dependencies for config function
		config.$inject = ['$routeProvider'];
 		
 		//config function 
		function config($routeProvider) {

			$routeProvider.
				when('/', {
					templateUrl: 'views/index.html'
				}).
				when('/pie', {
					templateUrl: 'views/pie.html'
				}).
				otherwise({
	        redirectTo: '/'
	      });

		}


})();