app.directive('navbar', function(){
    return {
        restrict: 'E',
        templateUrl: 'js/app/views/navbar.html',
        controller: navBarController,
        controllerAs: 'navBarCtrl'
    }
})