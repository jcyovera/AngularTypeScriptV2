namespace moduleFirstDemo{

        interface IProgressBarScope extends ng.IScope{
            value:number;
            showProgress:boolean;
        }

    export class Progresbar implements ng.IDirective{

        static instance():ng.IDirective{
            return new Progresbar;
        }

        scope={
            'showProgress':'='
        }
        restrict='E';
        templateUrl='app/directives/progressBar.html';
        link(scope:IProgressBarScope, elements: ng.IAugmentedJQuery,
         attrs:ng.IAttributes){
             scope.value=0;
             console.log(scope.showProgress);
             setInterval(()=>{
                scope.$apply(()=>{
                    if(scope.value>=100){
                    scope.value=0;
                    return;
                }
                scope.value=scope.value+10;
                });
                
            },1000);

        }

    }
     angular.module('demoModule')
    .directive('progressBar',Progresbar.instance)
}