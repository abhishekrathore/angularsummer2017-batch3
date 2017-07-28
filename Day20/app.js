angular
.module("mainApp",['firebase'])
.controller("todoCtrl",todoCtrl)


function todoCtrl($firebaseArray){

     var todo = this;
      var taskRef = firebase.database().ref("tasks");
      todo.tasks  =  $firebaseArray(taskRef)
      todo.editMode = false;
      var editIndex = -1;

      todo.addTask = function(task){    
        todo.tasks.$add({title: task,status:false})
        todo.task = ""
      }

        todo.removeTask = function(index){
          todo.tasks.$remove(index);
      }

      todo.done = function(index){
          todo.tasks[index].status = !todo.tasks[index].status;
          todo.tasks.$save(index).then(function(ref) {
              console.log("success");
          });
      }



      todo.edit = function(index){
         todo.task = todo.tasks[index].title
         todo.editMode = true;
         editIndex = index;
      }

      todo.updateTask = function(){
       todo.tasks[editIndex].title = todo.task;
       todo.tasks.$save(editIndex);
       todo.task = "";
       todo.editMode = false;

      }

      todo.check = function(e){
        console.log(e.keyCode == 13);
      }


      



}