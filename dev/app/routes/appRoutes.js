(function() {
	'use strict';

	angular
		.module('app')
		.config(['$routeProvider', routes]);
 
	function routes($routeProvider) {
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