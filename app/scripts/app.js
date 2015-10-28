'use strict';

/**
 * @ngdoc overview
 * @name toTheCityApp
 * @description
 * # toTheCityApp
 *
 * Main module of the application.
 */
var app = angular
  .module('toTheCityApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/weather', {
        templateUrl: "views/partials/weather.html",
        controller: 'WeatherCtrl',
        controllerAs: 'weather'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


//// Home
//  .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
//  .when("/jeopardy", {templateUrl: "partials/jeopardy.html", controller: "jeopardyCtrl"})
//  .when("/weather", {templateUrl: "partials/weather.html", controller: "PageCtrl"})
//  .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
//  // Blog
//  .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
//  .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
//  // else 404
//  .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
