angular
.module("mainApp",["ngRoute"])
.config(function($routeProvider){

    $routeProvider
        .when("/",{"templateUrl":"partials/home.html"})
        .when("/list",{"templateUrl":"partials/list.html"})
        .otherwise({"redirectTo":"/"})



})
.controller("firstCtrl",firstCtrl)
.controller("secondCtrl",secondCtrl)
.factory("dataService",dataService)


function firstCtrl(dataService,$timeout,$location){

    var first = this;
    first.tasks = dataService;

    first.add = function(task){
        first.tasks.push(task);
        console.log(first.tasks);
    }

    $timeout(function(){
        $location.path("/list");
    },5000)




}

function secondCtrl(dataService){

    var second = this;
    second.tasks = dataService;

    second.del = function(i){
        second.tasks.splice(i,1);
    }
}



function dataService(){

    return [];
}