var mainApp = angular.module('mainApp', ['ui.router'])
    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('portfolio', {
                url: '/',
                templateUrl: 'pages/portfolio.html',
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'pages/contact.html',
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
    }])
