function formDirective(){
    return {
        restrict:     'E',
        templateUrl:  'js/app/views/Arquitectura_de_negocios/form_arq.html',
        controller:   'formController',
        controllerAs: 'formCtrl'

    }
}

app.directive('formulario', formDirective);