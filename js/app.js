/**
 * Created by ClarkWong on 17/3/15.
 */
angular.module('TRMS', ['ui.router', 'ngResource', 'TRMS.controllers', 'TRMS.services']);

angular.module('TRMS').config(function($stateProvider){
    $stateProvider.state('users', {
        url: '/users',
        templateUrl: 'partials/users.html',
        controller: 'UserListController'
    }).state('viewUser', {
        url: '/users/:id/view',
        templateUrl: 'partials/user-view.html',
        controller: 'UserViewController'
    }).state('newUser', {
        url: '/users/new',
        templateUrl: 'partials/user-add.html',
        controller: 'UserCreateController'
    }).state('editUser', {
        url: '/users/:id/edit',
        templateUrl: 'partials/user-edit.html',
        controller: 'UserEditController'
    });
}).run(function($state){
    $state.go('users');
});