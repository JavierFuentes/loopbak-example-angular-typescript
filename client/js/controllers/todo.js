var app;
(function (app) {
    'use strict';
    var TodoController = (function () {
        // Inject Loopback's specialized Service Todo
        function TodoController($scope, $state, Todo) {
            $scope.todos = [];
            var getTodos = function () {
                Todo
                    .find()
                    .$promise
                    .then(function (results) {
                    $scope.todos = results;
                });
            };
            getTodos();
            $scope.addTodo = function () {
                Todo
                    .create($scope.newTodo)
                    .$promise
                    .then(function (todo) {
                    $scope.newTodo = '';
                    $scope.todoForm.content.$setPristine();
                    $('.focus').focus();
                    getTodos();
                });
            };
            $scope.removeTodo = function (item) {
                Todo
                    .deleteById(item)
                    .$promise
                    .then(function () {
                    getTodos();
                });
            };
        }
        ;
        // AngularJS DI
        TodoController.$inject = ['$scope', '$state', 'Todo'];
        return TodoController;
    })();
    app.TodoController = TodoController;
})(app || (app = {}));
//# sourceMappingURL=todo.js.map