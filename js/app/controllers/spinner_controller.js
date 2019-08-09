function spinnerController($scope){
    this.visible = false; 
    this.hide = function(){ //función para esconder el spinner
        this.visible = false;
        $('body, html').removeClass('noScroll'); //estilo de clase .noScroll en _global.scss
    }
    this.show = function(){ // funcion para mostrar el spinner
        this.visible = true;
        $('body, html').addClass('noScroll');
    }
    this.toggleVisibility = function(){
        this.visible = !this.visible;
    };
    $scope.$on('hideSpinner', function(event, args){ //espera al evento hideSpiner para disparar la función
        event.targetScope.spinnerCtrl.hide();
    } );
    $scope.$on('showSpinner', function(event, args){ //espera al evento hideSpiner para disparar la función
        event.targetScope.spinnerCtrl.show();
    } );
}

app.controller('spinnerController', spinnerController);