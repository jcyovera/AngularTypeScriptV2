var moduleFirstDemo;
(function (moduleFirstDemo) {
    var KarmaController = (function () {
        function KarmaController() {
            var _this = this;
            this.AddNumbers = function () {
                _this.suma = _this.num1 * 1 + _this.num2;
            };
            this.num1 = 0;
            this.num2 = 0;
            this.suma = 0;
        }
        return KarmaController;
    }());
    moduleFirstDemo.KarmaController = KarmaController;
    angular.module('karma', []);
    angular
        .module('karma')
        .controller('KarmaController', KarmaController);
})(moduleFirstDemo || (moduleFirstDemo = {}));

//# sourceMappingURL=appDemo.js.map
