(function(){
	'use strict';

	angular
		.module('app')
		.config(['$routeProvider', routes]);

	function routes($routeProvider) {
		$routeProvider.
			when('/', {
				template: 'tomale rola /'
			}).
			otherwise({
        		redirectTo: '/'
      		});
	}

})();