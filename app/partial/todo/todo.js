angular.module('todo').controller('TodoCtrl',function($scope, todoService, $state, $timeout){
    $scope.todo = {
        completed: false
    };

    $scope.todos = todoService.model.list;

    $scope.switch = false;

    $scope.createTodo = function(){
        // execute create function in articleService and pass the article data to it
        // article data is gathered from the html template using ng-model attributes
        todoService.create($scope.todo, function(){
            $state.reload();
        });
    };

    $scope.onDeleteClick = function(id){
        todoService.remove(id);
    };

    $scope.updateTodoLabel = function(id, data) {
        todoService.update(id, {id: id, todo: data})
    };

    $scope.updateTodoCompleted = function(id, data) {
        todoService.update(id, {completed: true})
        $timeout(function () {
            $state.reload()
        }, 200);
    }

        $scope.updateTodoCompletedReopen = function(id, data) {
            todoService.update(id, {completed: false})
            $timeout(function () {
                $state.reload()
            }, 200);
        }
    $scope.changeSwitch = function () {
        if ($scope.switch == true){
            $scope.switch = false
        } else {
            $scope.switch = true
        }
    }
});
