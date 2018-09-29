app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        //Routing home view
        .state('chat', {
            url: '/',
            views: {
                "body": {
                    templateUrl: '../views/chat/chat.html',
                    controller: 'ChatController'
                },
                //"navbar": { templateUrl: '../views/navbar.html' }
            }
        });

});