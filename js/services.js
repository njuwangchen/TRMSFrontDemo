/**
 * Created by ClarkWong on 16/3/15.
 */

angular.module('TRMS.services', []).factory('User', function($resource){
    return $resource('http://127.0.0.1:5000/api/v1/users/:id', {id : '@id'} ,{
       update : {
           method : 'PUT'
       }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});


