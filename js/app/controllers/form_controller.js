var formController = function($scope, $rootScope, $timeout){
    var formCtrl = this;
    var scrollCont = 0;
    this.isShowing = false;
    this.isHiding = false;
    this.tab = 1;
    this.budget = 0;
    this.description = "";
    this.fullName = "";
    this.bussiness = "";
    this.phone;
    this.email;
    this.close = function(){
        
        if(confirm("¿Estas seguro que deseas salir? no se guardaran los cambios ingresados")){
            this.isHiding = true;
            $('body, html').removeClass('noScroll');
            $timeout(function(){
                formCtrl.isHiding = false;
                formCtrl.isShowing = false;
                formCtrl.clearForm();
            }, 500);
        }
        
    }
    this.isActiveTab = function(tab){
        return (tab == this.tab);
    }
    var formCtrl = this;
    
    this.nextTab = function(){
        this.tab = 2;
    }
    this.prevTab = function(){
        this.tab = 1;
    }
    this.changeTab = function(a){
        if((scrollCont++) === 10 && (a === 1 || a === -1)){
            scrollCont = 0;
            console.log(a);
            this.tab = Math.round(((Math.acos(a))/Math.PI) + 1);
            $('#dummy').click();
        }
    }
    this.showForm = function(){
        $('body, html').addClass('noScroll');
        this.isShowing = true;
    }
    this.clearForm = function(){
        this.budget = 0;
        this.description = "";
        this.tab = 1;
    }
    // this.sendForm = function(){
    //TODO
    // }
    $rootScope.$on('startForm', function(event, args){ //espera al evento startForm para disparar la función
        $timeout(function(){formCtrl.showForm()},1000);
    } );

    $('#form').on('mousewheel', function(event) {
        console.log(event.deltaY);
        var delta;
        if(event.deltaY < 0){
            delta = -1;
        }else{
            delta = 1;
        }
        formCtrl.changeTab(delta);
    });
};

app.controller('formController', formController);
