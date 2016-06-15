var moduleFirstDemo;
(function (moduleFirstDemo) {
    'user strict';
    var demoModule = angular.module('demoModule', ['ngRoute']);
    demoModule.config(demoRouteConfig);
    function demoRouteConfig($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/views/inicio.html'
        });
    }
})(moduleFirstDemo || (moduleFirstDemo = {}));
//# sourceMappingURL=app.js.map