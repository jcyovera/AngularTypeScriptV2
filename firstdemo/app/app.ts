namespace moduleFirstDemo{
    'user strict'
    var demoModule= angular.module('demoModule',['ngRoute']);
    demoModule.config(demoRouteConfig);

    function demoRouteConfig($routeProvider:ng.route.IRouteProvider):void {
        $routeProvider.when('/',{
            templateUrl:'app/views/inicio.html'
        })
    }
}