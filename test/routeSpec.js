describe('Config: Routes', function(){
	//instanciando o modulo antes de cada it
	beforeEach(module('app'));
	var $rout;

	beforeEach(inject(function($route){
		$rout = $route;
	}));

	it('should test routeProvider', function() {

		expect($rout.routes['/'].templateUrl).toEqual('views/index.html');
	  expect($rout.routes['/pie'].templateUrl).toEqual('views/pie.html');
	  
	  expect($rout.routes[null].redirectTo).toEqual('/');
	});

});