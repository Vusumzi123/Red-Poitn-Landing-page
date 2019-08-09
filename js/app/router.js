app.config(['$routeProvider' , '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider){
    $httpProvider.defaults.timeout = 5000;  
    $routeProvider
        .when('/',
            {
                templateUrl: 'js/app/views/Arquitectura_de_negocios/Arquitectura.html'
            }
        ).when('/form',
            {
                templateUrl: 'js/app/views/Arquitectura_de_negocios/form_arq.html',
                controller:   'formController',
                controllerAs: 'formCtrl'
            }
        ).when('/404',
            {
                templateUrl: 'js/app/views/not_found.html'
            }
        ).otherwise(
            {
              redirectTo: '/404'
            }
        );
        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // });
}])