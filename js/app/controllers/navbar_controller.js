function navBarController($scope, $interval, $timeout){
    this.tosvg = tosvg;
    this.isTop = true;
    this.isIE = isIE();
    // this.detectTop = function(){
    //     return $(window).scrollTop() <= 80;
    // }
    // $interval(this.detectTop,250);
    $scope.$evalAsync(function() { this.tosvg(); } );

}

app.controller('navBarController',navBarController);