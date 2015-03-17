/**
 * Created by ClarkWong on 17/3/15.
 */
angular.module('TRMS.controllers', []).controller('UserListController', function($scope, $state, popupService, $window, User) {
    $scope.users = User.query();

    $scope.deleteUser = function(user){
        if (popupService.showPopup('Really delete this?')) {
            user.$delete(function () {
                $window.location.href = ''; //redirect to home
            });
        }
    };
}).controller('UserViewController', function($scope, $stateParams, User){
    $scope.user = User.get({id : $stateParams.id});

}).controller('UserCreateController', function($scope, $state, $stateParams, User){
    $scope.user = new User();

    $scope.addUser = function(){
        $scope.user.$save(function () {
            $state.go('users');
        });
    };
}).controller('UserEditController', function($scope, $state, $stateParams, User){
    $scope.updateUser = function(){
        $scope.user.$update(function(){
            $state.go('users');
        });
    };

    $scope.loadUser = function(){
        $scope.user = User.get({id:$stateParams.id});
    };

    $scope.loadUser();
});