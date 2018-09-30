angular.module('chat').controller('ChatController', function ($scope, $http) {
    var socket = io();

    //variaveis de escopo
    $scope.message = {};
    $scope.chat = [];

    //funcoes de escopo
    $scope.enviar = enviar;
    $scope.cleanchat = cleanchat;

    init();

    function init() {
        socket.on('conversas', function (chat) {
            $scope.chat = chat;
            $scope.$apply();
        });
        socket.on('conversa', function (message) {
            var encontrou = false;
            for (var x = 0; x < $scope.chat.length && !encontrou; x++) {
                if ($scope.chat[x].id === message.id) {
                    $scope.chat[x].status = message.status;
                    encontrou = true;
                }
            }
            if (!encontrou) {
                $scope.chat.push(message);
            }
            $scope.$apply();
        });

    }

    function enviar() {
        socket.emit('conversa enviar', $scope.message);
        $scope.message.item = '';
    }

    function cleanchat() {
        if ($scope.chat) {
            $scope.chat = [];

            socket.on('conversas', function (chat) {
                $scope.chat = chat;
                $scope.$apply();
            });
        }
    };
});