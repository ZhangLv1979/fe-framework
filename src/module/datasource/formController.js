import BaseFormController from '../../BaseFormController.js'

class DatasourceFormController extends BaseFormController {
  constructor(DataService, $stateParams, $mdToast, $state) {
	  var info = {reponame: 'dataConnections', title: '数据源', repo: 'datasource'};
	  super(info, DataService, $stateParams, $mdToast, $state);	  
  }
}
DatasourceFormController.$inject = ['DataService', '$stateParams', '$mdToast', '$state'];
export default DatasourceFormController;