/// <reference path="../Scripts/typings/angularjs/angular.d.ts" />
var Application;
(function (Application) {
    'use strict';
    Application.angularApp = angular.module("app", []);
})(Application || (Application = {}));
var Application;
(function (Application) {
    'use strict';
    var AppCtrl = (function () {
        function AppCtrl($scope) {
            this.$scope = $scope;
            $scope.greeting = 'asdf';
            $scope.greeting2 = 'asdf2';
            $scope.changeName = function (name) {
                $scope.greeting = 'Hello ' + name + ' !';
            };
        }
        AppCtrl.$inject = [
            '$scope'
        ];
        return AppCtrl;
    })();
    Application.AppCtrl = AppCtrl;
    Application.angularApp.controller('appCtrl', AppCtrl);
})(Application || (Application = {}));
//# sourceMappingURL=app.js.map