import BaseFormController from '../../BaseFormController.js'

class FormController extends BaseFormController {
  constructor(DataService, $stateParams, $mdToast, $state) {
	  var info = {reponame: 'dataTables', title: '数据表', repo: 'datatable'};
	  super(info, DataService, $stateParams, $mdToast, $state);	  
	  this.dataservice.init('dataConnections');
	  this.connections = [];
	  this.dataservice.query().then((data) => {
		  this.connections = data._embeddedItems;
		  this.dataservice.init(this.reponame);
	  });
  }
}
FormController.$inject = ['DataService', '$stateParams', '$mdToast', '$state'];
export default FormController;