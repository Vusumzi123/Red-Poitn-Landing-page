function headerController($scope, $timeout, $interval){
    this.messages= [
        "Quiero mejorar mi servicio",
        "Necesito que mi negocio crezca",
        "Quiero nuevas tecnologías",
        "¿Cómo puedo mejorar mi empresa?"
    ];
    this.curretMessage = this.messages[0];
    this.curretMessageIndex = 1;
    this.nextMessage = function(){
        var ctrl = $scope.headerCtrl;
        
        if(ctrl.curretMessageIndex >= ctrl.messages.length) {ctrl.curretMessageIndex = 0 }
        ctrl.curretMessage = ctrl.messages[ctrl.curretMessageIndex++];
    };
    this.startCarousel = function(){
        $scope.$emit('showSpinner');
        $interval(this.nextMessage, 4000);
        $timeout(function() { $scope.$emit('hideSpinner') }, 900);
    };
    this.isStarted = false;
    var headerCtlr = this;
    $scope.$evalAsync(function() { headerCtlr.isStarted = true; headerCtlr.startCarousel()} );
}

app.controller('headerController',headerController);