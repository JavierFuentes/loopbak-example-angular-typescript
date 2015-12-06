module app {
    'use strict';
    export class TodoController {

        // AngularJS DI
        static $inject = [ '$scope', '$state', 'Todo' ];

        // Inject Loopback's specialized Service Todo
        constructor( $scope, $state, Todo ) {

            $scope.todos = [];

            var getTodos = () => {
                Todo
                    .find()
                    .$promise
                    .then( ( results ) => {
                        $scope.todos = results;
                    } );
            };
            getTodos();

            $scope.addTodo = () => {
                Todo
                    .create( $scope.newTodo )
                    .$promise
                    .then( ( todo ) => {
                        $scope.newTodo = '';
                        $scope.todoForm.content.$setPristine();
                        $( '.focus' ).focus();
                        getTodos();
                    } );
            };

            $scope.removeTodo = ( item ) => {
                Todo
                    .deleteById( item )
                    .$promise
                    .then( () => {
                        getTodos();
                    } );
            };
        };
    }
}