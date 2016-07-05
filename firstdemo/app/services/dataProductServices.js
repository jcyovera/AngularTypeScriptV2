var moduleFirstDemo;
(function (moduleFirstDemo) {
    'use strict';
    var DataProductService = (function () {
        function DataProductService($resource) {
            this.$resource = $resource;
        }
        DataProductService.prototype.getProductResource = function () {
            return this.$resource("http://localhost:3000/products/:id");
        };
        DataProductService.$inject = ['$resource'];
        return DataProductService;
    }());
    moduleFirstDemo.DataProductService = DataProductService;
    angular
        .module('demoModule')
        .service('DataProductService', DataProductService);
})(moduleFirstDemo || (moduleFirstDemo = {}));

//# sourceMappingURL=dataProductServices.js.map
