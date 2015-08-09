describe('AppController', function(){
	//instanciando o modulo antes de cada it
	beforeEach(module('app'));
	var controller;

	beforeEach(inject(function($controller){
		controller = $controller('appController');
		spyOn(controller, 'validateForm');
	}));


	it('Should return object with length to equal parameter ', function() {
		expect(controller.createSlices(2)).toEqual([
			{ position: 0},
			{ position: 1}
		]);
	});

	it('Should return true for percent to Equal 100', function(){
		var resultTrue = controller.test.percentIsTrue({0: "70", 1: "30"});
		var resultFalse = controller.test.percentIsTrue({0: "70", 1: "90"});
		expect(resultTrue).toEqual(true);
		expect(resultFalse).toEqual(false);
	});

});