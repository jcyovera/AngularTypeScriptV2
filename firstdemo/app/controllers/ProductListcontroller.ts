namespace moduleFirstDemo {
    'use strict';
    //alias
    import IProduct = moduleFirstDemo.domain.IProduct;
    export interface IProductListController{
        title:string;
        products:IProduct[];
        showImage:boolean;
        toggleImage():void;
    }
    export class ProductListController implements IProductListController {
        static $inject: Array<string> = ['DataProductService','DataProductFactory'];
        title:string;
        products:IProduct[];
        showImage:boolean;
        showProgress:boolean;

        constructor(private DataProductService: moduleFirstDemo.IDataProductService,
        private DataProductFactory:moduleFirstDemo.IDataProductFactory) {
           this.title="Lista de productos"; 
           this.showImage=false;
           this.showProgress=true;
           //var productResource=DataProductService.getProductResource();
           /*productResource.query((data:moduleFirstDemo.domain.IProduct[])=>{
               this.products=data;
           })*/
           this.DataProductFactory.getProducts().then(
               res=>{
                   this.products=res;
                   this.showProgress=false;
               }
           );
           /*this.products=[
                {
					"productId": 1,
					"productName": "Leaf Rake",
					"productCode": "GDN-0011",
					"releaseDate": new Date(2009, 2, 19),
					"description": "Leaf rake with 48-inch wooden handle.",
					"price": 19.95,
					"imageUrl": "http://www.paraide.com/Portals/0/CVStoreImages/13160_540.jpg"
				},
				{
					"productId": 2,
					"productName": "Garden Cart",
					"productCode": "GDN-0023",
					"releaseDate": new Date(2010, 2, 18),
					"description": "15 gallon capacity rolling garden cart",
					"price": 32.99,
					"imageUrl": "http://img.diytrade.com/smimg/351131/2219910-752095-0/GC1813_Garden_Cart/7d50.jpg"
				},
				{
					"productId": 5,
					"productName": "Hammer",
					"productCode": "TBX-0048",
					"releaseDate": new Date(2013, 4, 21),
					"description": "Curved claw steel hammer",
					"price": 8.99,
					"imageUrl": "http://lghttp.18445.nexcesscdn.net/808F9E/mage/media/catalog/product/cache/1/thumbnail/550x/9df78eab33525d08d6e5fb8d27136e95/v/5/v508_hammer.jpg"
				}
            ];*/
        }

        toggleImage():void{
            this.showImage=!this.showImage;
        }

    }

    angular
        .module('demoModule')
        .controller('ProductListController', ProductListController);
}