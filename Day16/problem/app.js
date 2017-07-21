angular
.module("mainApp",[])
.controller("firstCtrl",firstCtrl)
.controller("secondCtrl",secondCtrl)
.factory("dataService",dataService)


function firstCtrl(dataService,$timeout){

    var first = this;
    first.tasks = dataService;

    first.add = function(task){
        first.tasks.push(task);
        console.log(first.tasks);
    }


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