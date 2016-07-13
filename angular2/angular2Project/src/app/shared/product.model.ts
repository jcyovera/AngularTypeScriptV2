  export interface IProduct{
        id:number;
        productName:string;
        productCode:string;
        releaseDate:Date;
        price:number;
        description:string;
        imageUrl:string;
    }
    export class Product implements IProduct{
        constructor(public id:number,
                    public productName:string,
                    public productCode:string,
                    public releaseDate:Date,
                    public price:number,
                    public description:string,
                    public imageUrl:string){
            
        }
    }