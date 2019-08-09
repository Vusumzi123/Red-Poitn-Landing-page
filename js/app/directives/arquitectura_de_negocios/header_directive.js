function headerArq() {
    var directive = {
        restrict: 'E',
        templateUrl: 'js/app/views/Arquitectura_de_negocios/header.html',
        controller: headerController,
        controllerAs: 'headerCtrl'
    };
    return directive;
}
app.directive('headerArq', headerArq);