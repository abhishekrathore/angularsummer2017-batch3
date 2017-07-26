angular
.module("mainApp",['firebase'])
.controller("todoCtrl",todoCtrl)


function todoCtrl($firebaseArray){

     var todo = this;
      var taskRef = firebase.database().ref("tasks");
      todo.tasks  =  $firebaseArray(taskRef)

      todo.addTask = function(task){    
        todo.tasks.$add({title: task,status:false})
        todo.task = ""
      }

        todo.removeTask = function(index){
          todo.tasks.$remove(index);
      }

      todo.done = function(index){
          todo.tasks[index].status = true;
      }



      



}