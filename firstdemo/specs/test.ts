namespace firstDemo {
describe('KarmaController', () => {
    beforeEach(angular.mock.module('karma'));
    var $controller : ng.IControllerService;
     beforeEach(() => {
            inject(function (_$controller_) {
                $controller = _$controller_;
            });
        });
    describe("sum values", ()=>{
        var controller;
            beforeEach(()=>{
                controller = $controller("KarmaController",{});
            });
        it('should add two numbers', function() {
            controller.num1 = 5;
			controller.num2 = 10;
			controller.AddNumbers();
			
			expect(controller.suma).toEqual(15);
        });
    });

});
}
