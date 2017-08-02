angular
.module("mainApp",['firebase'])
.controller("todoCtrl",todoCtrl)


function todoCtrl($firebaseArray){

     var todo = this;
      var taskRef = firebase.database().ref("tasks");
      todo.tasks  =  $firebaseArray(taskRef)
      todo.pending = false;
      todo.tasks.$loaded().then(function(data){
        console.log(data);
       getCompletedTasks();

      })
      todo.editMode = false;
      var editIndex = -1;


     function getCompletedTasks(){
            var completed = 0;

         for(var i=0;i< todo.tasks.length;i++){
          if( todo.tasks[i].status){
            completed++;
          }
        }
        return completed;
     }

     todo.getCompletedTasks = getCompletedTasks;

      todo.addTask = function(task){    
        var d = new Date()
        todo.tasks.$add({title: task,status:false, created_at:d.toISOString()})
        todo.task = ""
      }

        todo.removeTask = function(index){
          todo.tasks.$remove(index);
      }

      todo.done = function(id){

        for(var i=0;i<todo.tasks.length;i++){

          if(todo.tasks[i].$id==id){
              todo.tasks[i].status = !todo.tasks[i].status;

          todo.tasks.$save(i).then(function(ref) {
              console.log("success");
          });
            break;
          }

        }

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

      todo.custom = function(data,input){
        console.log(data,input);
        
        return !todo.pending  ;
      }


      



}