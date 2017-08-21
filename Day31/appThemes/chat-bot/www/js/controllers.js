angular.module('starter')
    .controller('chatCtrl', function($scope, $stateParams, Chats,$window) {
        console.log("chat screen");
        var devHeight = $window.innerHeight;
        var devWidth = $window.innerWidth;
        var chat = this;
        chat.maxWidth = { 'max-width': 0.8 * devWidth + 'px' }

        $scope.chat = Chats.get($stateParams.chatId);
    });
