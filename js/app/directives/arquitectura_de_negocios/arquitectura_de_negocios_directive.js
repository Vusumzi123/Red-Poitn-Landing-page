function arquitecturaDeNegociosDirective(){
    var directive = {
        restrict: 'E',
        templateUrl: 'js/app/views/Arquitectura_de_negocios/Arquitectura.html'
    }
    return directive;
}

app.directive('arquitecturaDeNegocios', arquitecturaDeNegociosDirective);