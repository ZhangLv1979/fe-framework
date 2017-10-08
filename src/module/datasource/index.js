import 'angular';
import 'angular-ui-router'
import routing from './routes';
import DatasourceFormController from './formController';
import DatasourceListController from './listController';
import DataService from '../../dataservice';

import BaseFormController from '../../BaseFormController.js'

export default angular.module('app.datasource', ['ui.router', DataService])
  .config(routing)
  .controller('DatasourceFormController', DatasourceFormController)
  .controller('DatasourceListController', DatasourceListController)
  .name;