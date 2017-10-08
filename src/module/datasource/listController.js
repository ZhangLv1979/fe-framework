import BaseListController from '../../BaseListController.js'

class DatasourceListController extends BaseListController{

  constructor(DataService, $stateParams, $mdToast, $state) {
	  var info = {reponame: 'dataConnections', title: '数据源', repo: 'datasource'};
	  super(info, DataService, $stateParams, $mdToast, $state);	  
  }
  
}
DatasourceListController.$inject = ['DataService', '$stateParams', '$mdToast', '$state'];
export default DatasourceListController;
