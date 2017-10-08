import BaseListController from '../../BaseListController.js'

class ListController extends BaseListController{

  constructor(DataService, $stateParams, $mdToast, $state) {
	  var info = {reponame: 'dataTables', title: '数据表', repo: 'datatable'};
	  super(info, DataService, $stateParams, $mdToast, $state);	  
  }
  
}
ListController.$inject = ['DataService', '$stateParams', '$mdToast', '$state'];
export default ListController;
