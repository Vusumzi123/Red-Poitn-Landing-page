app.directive('spinner', function(){
    return {
        restrict: 'E',
        templateUrl: 'js/app/views/spinner.html',
        controller: spinnerController,
        controllerAs: 'spinnerCtrl'
    }
}
);