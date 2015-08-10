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
		appController.$inject = [];


		function appController() {
			var vm = this;

			vm.createSlices = createSlices;
			vm.validateForm = validateForm;
			vm.test = {
				percentIsTrue: percentIsTrue
			};

			function createSlices(limit){
				var obj = [];

				for (var i = 0; i < limit; i++) {
					obj.push({position: i});
				}

				return vm.slices = obj;
			}

			function validateForm(formSlices) {
				if(!percentIsTrue(formSlices))
					alert('a soma das porcentagens deve ser igual a 100');
				else
					generatePieChart(vm.formSlices.slice.slice);
			}

			function percentIsTrue(values) {
				var count = 0;
				
				for(var i in values) {
					count += parseInt(values[i]);
				}

				return count == 100 ? true : false;
			}

			function generatePieChart(series){
				var arraySeries = [];

				for(var i in series)
					arraySeries.push(series[i]);

				vm.pieData  = {
      		series: arraySeries
      	};
			}


		}; // end appController

})();