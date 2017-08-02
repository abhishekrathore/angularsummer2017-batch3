angular
.module("mainApp",['firebase'])
.controller("firstCtrl",firstCtrl)


function firstCtrl($firebaseArray){

     var first = this;
      var studentRef = firebase.database().ref("students");
      var students  =  $firebaseArray(studentRef)

      first.students = students
      first.add = function(name){
                students.$add({name:name});
      }


     var teacherRef = firebase.database().ref("teachers");
      var teachers  =  $firebaseArray(teacherRef)

      first.addTeacher = function(name){
                teachers.$add({name:name});
      }
    

     first.combined = [];

     first.students.$loaded().then(function(data){

        teachers.$loaded().then(function(result){

            first.combined = first.students.concat(teachers)
        })
     })

      



}