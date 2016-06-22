namespace moduleFirstDemo {
    'use strict';

    export interface IDataProductService {
        getProductResource():ng.resource.IResourceClass<IProductResource>;
    }
    interface IProductResource extends ng.resource.IResource<moduleFirstDemo.domain.IProduct>{

    }
    export class DataProductService implements IDataProductService {
        static $inject: Array<string> = ['$resource'];
        constructor(private $resource: ng.resource.IResourceService) {

        }
        getProductResource():ng.resource.IResourceClass<IProductResource>{
            return this.$resource("http://localhost:3000/products/:id");
        }

    }

    angular
        .module('demoModule')
        .service('DataProductService', DataProductService);
}