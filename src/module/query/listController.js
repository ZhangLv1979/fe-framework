import BaseListController from '../../BaseListController.js'

class ListController extends BaseListController{

  constructor(DataService, $stateParams, $mdToast, $state) {
	  var info = {reponame: 'queries', title: '查询', repo: 'query'};
	  super(info, DataService, $stateParams, $mdToast, $state);	  
  }
  
}
ListController.$inject = ['DataService', '$stateParams', '$mdToast', '$state'];
export default ListController;
