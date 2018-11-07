// @ts-nocheck
let angular = require('angular');

angular.module('square')
.component('square', {
    bindings:{
        mark: '<',
        winnerCell:'<',
        onClick: '&',
    },
    templateUrl:'./square.template.html',
    controller: [class {
        constructor(){
        }

        click(){
            this.onClick();
        }
    }]
});