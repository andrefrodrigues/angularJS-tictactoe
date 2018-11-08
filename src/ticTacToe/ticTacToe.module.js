let angular = require('angular');


angular.module('ticTacToe',['ui.router','board','about'])
.config(['$stateProvider','$urlRouterProvider',
function($stateProvider,$urlRouterProvider){

    $stateProvider.state({
        name:'board',
        url:'/board',
        component:'board'
    });
    $stateProvider.state({
        name:'about',
        url:'/about',
       component:'about'
    });
    $urlRouterProvider.otherwise('/board');
}]);

require('@uirouter/angularjs');
require('./ticTacToe.component');
require('../board/board.module');
require('../about/about.module');