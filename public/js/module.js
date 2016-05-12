'use strict';

var app = angular.module('iotHackathonSecurity', [ 'ui.bootstrap', 'ui.router', 'oitozero.ngSweetAlert', 'satellizer']);



app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
  .state('login', {
    url           : '/',
    templateUrl   : 'html/login.html'
  })
  .state('home', {
    url           : '/home' ,
    templateUrl   : 'html/home.html' ,
    controller    : 'homeCtrl'
  })
  .state('grid', {
    url           : '/grid',
    templateUrl   : 'html/grid.html',
    controller    : 'gridCtrl'
  })
  .state('log', {
    url           : '/log',
    templateUrl   : 'html/log.html',
    controller    : 'logCtrl'
  })
  .state('alert', {
    url           : '/alert',
    templateUrl   : 'html/alert.html',
    controller    : 'alertCtrl'
  })

  $urlRouterProvider.otherwise('/');
});


; // END OF .state(s)
