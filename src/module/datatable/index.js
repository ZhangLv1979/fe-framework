import 'angular';
import 'angular-ui-router'
import routing from './routes';
import FormController from './formController';
import ListController from './listController';
import DataService from '../../dataservice';

export default angular.module('app.datatable', ['ui.router', DataService])
  .config(routing)
  .controller('DatatableFormController', FormController)
  .controller('DatatableListController', ListController)
  .name;