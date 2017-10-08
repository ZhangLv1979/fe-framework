import '../css/font-awesome.min.css'
import '../css/angular-material.min.css'
import '../css/ui-grid.min.css'
import '../css/main.css'
import 'angular'
import 'angular-messages'
import 'angular-material'
import 'angular-ui-router'
import 'angular-sanitize'
import 'angular-ui-grid'
import routing from './router.js';
import MenuController from './menu.js'
import home from './module/home';
import datatable from './module/datatable';
import datasource from './module/datasource';
import query from './module/query';



angular.module('app', [
	'ui.router', 
	'ngSanitize', 
	'ngMaterial', 
	'ngMessages', 
	home, 
	datatable, 
	datasource, 
	query])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('orange')
    .warnPalette('red')
    ;
})
.config(routing)
.controller('MenuController', MenuController);
