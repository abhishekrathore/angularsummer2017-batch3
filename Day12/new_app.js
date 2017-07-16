angular.module("test",[])
.controller("demoCtrl",demoCtrl)


function demoCtrl(){
    console.log("demo")
    var demo = this;
    demo.nations = [{name:"india",capital:"delhi",pop:"1.3Billion"},
    {name:"US",capital:"WDC",pop:"200Milion"},
 {name:"UK",capital:"London",pop:"20Milion"}];



    demo.change = function(x){
        console.log(x);
        for(i=0;i<demo.nations.length;i++){
            if(demo.nations[i].capital==x){
               demo.pop = demo.nations[i].pop
            }
        }

    }
}