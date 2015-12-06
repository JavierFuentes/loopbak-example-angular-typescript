var app;
(function (app) {
    'use strict';
    var myapp = angular
        .module('app', [
        'lbServices',
        'ui.router'
    ]);
    // Register owr Controllers
    myapp.controller('TodoController', app.TodoController);
    myapp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('todo', {
                url: '',
                templateUrl: 'views/todo.html',
                controller: 'TodoController'
            });
            $urlRouterProvider.otherwise('todo');
        }]);
})(app || (app = {}));
//# sourceMappingURL=app.js.map