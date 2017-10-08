import 'angular';
import 'angular-ui-router'
import routing from './home.routes';
import HomeController from './home.controller';
import DataService from '../../dataservice';

export default angular.module('app.home', ['ui.router', DataService])
  .controller('HomeController', HomeController)
  .config(routing)
  .name;