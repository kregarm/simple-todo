angular.module('todo').directive('createNew', function(todoService, $state) {
	return {
		restrict: 'E',
		replace: true,
		scope: {

		},
		templateUrl: 'directive/createNew/createNew.html',
		link: function(scope, element, attrs, fn, state) {
            scope.todo = {
                completed: false
            };
            scope.newData = {};
            scope.todos = todoService.model.list;

            scope.createTodo = function() {

                // execute create function in articleService and pass the article data to it

                // article data is gathered from the html template using ng-model attributes
                todoService.create(scope.todo, function () {
                    scope.todo.todo = "";
                    $state.reload();
                })
            };
		}

    };
});
