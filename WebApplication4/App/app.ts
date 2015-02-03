/// <reference path="../Scripts/typings/angularjs/angular.d.ts" />

module Application {
    'use strict';
    export var angularApp: ng.IModule = angular.module("app", []);
}

module Application {
    'use strict';
    export interface IAppCtrlScope extends ng.IScope {
        greeting: string;
        greeting2: string;
        changeName(name): void;
    }
    export class AppCtrl {
        public static $inject = [
            '$scope'
        ];
        constructor(private $scope: IAppCtrlScope) {
            $scope.greeting = 'asdf';
            $scope.greeting2 = 'asdf2';
            $scope.changeName = (name) => {
                $scope.greeting = 'Hello ' + name + ' !';
            }
        }
    }
    angularApp.controller('appCtrl', AppCtrl)
}