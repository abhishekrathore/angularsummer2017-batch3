angular
.module("mainApp",[])
.controller("firstCtrl",firstCtrl)
.controller("secondCtrl",secondCtrl)
.factory("dataService",dataService)


function firstCtrl(dataService,$timeout){

       console.log("first");
       dataService.name = "hello"
    //    dataService = {"name":"abc"}
       console.log(dataService.name)
       
       this.name =  dataService.name
       this.person = dataService

       $timeout(function(){
           console.log(dataService.name)
           dataService.name = "heyy"
       },2000)


}


function secondCtrl(dataService){

        console.log("second");
        console.log(dataService.name)
        dataService.name ="hi"

}



function dataService(){

    return {};
}