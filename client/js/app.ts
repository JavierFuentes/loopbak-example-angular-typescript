module app {
    'use strict'

    var myapp = angular
        .module( 'app', [
            'lbServices',
            'ui.router'
        ] );

    // Register owr Controllers
    myapp.controller( 'TodoController', TodoController );

    myapp.config( [ '$stateProvider', '$urlRouterProvider', ( $stateProvider,
                                                              $urlRouterProvider ) => {
        $stateProvider
            .state( 'todo', {
                url: '',
                templateUrl: 'views/todo.html',
                controller: 'TodoController'
            } );

        $urlRouterProvider.otherwise( 'todo' );
    } ] );
}