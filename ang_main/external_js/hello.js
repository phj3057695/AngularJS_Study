/**
 * Created by UNion-Nexus on 9/19/2016.
 */
var app=angular.module('scopeExApp',[]);
app.controller('ctrl1',['$scope',function($scope){
    $scope.test="Good morning";
}]);
app.controller('ctrl2',['$scope',function($scope){
    $scope.test="Good Evening";
}]);  //controller를 각영역에 따로 만들 수 있다.ctrl1, ctrl2를 보면 알 수 있다.