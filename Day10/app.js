angular
.module("mainApp",[])
.controller("firstCtrl",firstCtrl)

function firstCtrl($scope,$rootScope){
    var first = this;
    first.a =5;
    first.b= 6;
    first.c = 7;
    $scope.name = "abcd"
    $rootScope.age = 30;
    first.name = "xyz";   //view variables
    first.sum = first.a+first.b+first.c;

setTimeout(function(){
    console.log(first.name);

},3000)





}