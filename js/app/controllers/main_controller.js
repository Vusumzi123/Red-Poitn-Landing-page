function mainController($scope, $rootScope, $timeout){
    var mainCtrl = this;
    this.isMobile = window.mobilecheck();
    this.startForm = function(fromElem){
        this.isOpeningForm = true;
        fromElem.classList.toggle('openning-form');
        console.log($rootScope);
        
        $rootScope.$broadcast('startForm');
        $timeout(function(){fromElem.classList.toggle('openning-form');} ,1500);
    }
}

app.controller('mainController', mainController);