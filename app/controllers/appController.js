/**
	*
	* AppController
	* 
	* @dependency - $http
	*
**/
(function(){
	'use strict'
	angular
		.module('app')
		.controller('appController', appController);

		//inject dependency	
		appController.$inject = [	'$http',
															'$location' ];

		/**
			*
			* appController
			*
			* 
			* @dependency - $http, 
			*								$location 
			*
		**/

		function appController($http, $location) {
			var vm = this;

			vm.createSlicesArray = createSlicesArray;

			function createSlicesArray(limit){
				vm.slices = new Array(limit);
			}


		}; // end appController

})();