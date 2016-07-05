var moduleFirstDemo;
(function (moduleFirstDemo) {
    var Progresbar = (function () {
        function Progresbar() {
            this.scope = {
                'showProgress': '='
            };
            this.restrict = 'E';
            this.templateUrl = 'app/directives/progressBar.html';
        }
        Progresbar.instance = function () {
            return new Progresbar;
        };
        Progresbar.prototype.link = function (scope, elements, attrs) {
            scope.value = 0;
            console.log(scope.showProgress);
            setInterval(function () {
                scope.$apply(function () {
                    if (scope.value >= 100) {
                        scope.value = 0;
                        return;
                    }
                    scope.value = scope.value + 10;
                });
            }, 1000);
        };
        return Progresbar;
    }());
    moduleFirstDemo.Progresbar = Progresbar;
    angular.module('demoModule')
        .directive('progressBar', Progresbar.instance);
})(moduleFirstDemo || (moduleFirstDemo = {}));

//# sourceMappingURL=progressBarDirective.js.map
