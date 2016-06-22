var moduleFirstDemo;
(function (moduleFirstDemo) {
    'user strict';
    var demoModule = angular.module('demoModule', ['ngRoute', 'ngResource']);
    demoModule.config(demoRouteConfig);
    function demoRouteConfig($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/views/inicio.html'
        }).when('/products', {
            templateUrl: 'app/views/productList.html',
            controller: 'ProductListController',
            controllerAs: 'vm'
        });
    }
})(moduleFirstDemo || (moduleFirstDemo = {}));
//# sourceMappingURL=app.js.map