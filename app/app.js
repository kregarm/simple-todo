angular.module('todo', ['ui.bootstrap','ui.utils','ui.router','ngAnimate', 'xeditable']);

angular.module('todo').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('todo', {
        url: '/todo',
        templateUrl: 'partial/todo/todo.html',
        controller: 'TodoCtrl',
        resolve: {
            todos: function (todoService) {

                return todoService.getAll();

            }
        }
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/todo');

});

angular.module('todo').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
