namespace moduleFirstDemo{
   export class KarmaController {
        num1:number;
        num2:number;
        suma:number;
        constructor() {
            this.num1=0;
            this.num2=0;
            this.suma=0;
           
        }  
        AddNumbers = () => {
           this.suma = this.num1*1 + this.num2;
         };

    }
    
    angular.module('karma', []);
    angular
        .module('karma')
        .controller('KarmaController', KarmaController);
}