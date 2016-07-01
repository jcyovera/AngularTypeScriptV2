var firstDemo;
(function (firstDemo) {
    describe('KarmaController', function () {
        beforeEach(angular.mock.module('karma'));
        var $controller;
        beforeEach(function () {
            inject(function (_$controller_) {
                $controller = _$controller_;
            });
        });
        describe("sum values", function () {
            var controller;
            beforeEach(function () {
                controller = $controller("KarmaController", {});
            });
            it('should add two numbers', function () {
                controller.num1 = 5;
                controller.num2 = 10;
                controller.AddNumbers();
                expect(controller.suma).toEqual(15);
            });
        });
    });
})(firstDemo || (firstDemo = {}));

//# sourceMappingURL=test.js.map
