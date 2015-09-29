var mainApp = angular.module('mainApp', ['ui.router'])
    .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('code', {
                url: '/',
                templateUrl: 'pages/code.html',
            })
            .state('about', {
                url: '/about',
                templateUrl: 'pages/about.html',
            })
            .state('shhh', {
                url: '/shhh',
                templateUrl: 'pages/shhh.html',
            })
            .state('credits', {
                url: '/credits',
                templateUrl: 'pages/credits.html',
            })
            .state('talks', {
                url: '/talks',
                templateUrl: 'pages/talks.html',
            })
            .state('design', {
                url: '/design',
                templateUrl: 'pages/design.html',
            })

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    }])
