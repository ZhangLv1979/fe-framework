class BaseListController {

  constructor(info, DataService, $stateParams, $mdToast, $state) {
	  this.title = info.title;
	  this.reponame = info.reponame;
	  this.repo = info.repo;
	  this.$mdToast = $mdToast;
	  this.$state = $state;
	  this.datasource = DataService;
	  this.datasource.init(this.reponame);
	  this.items = [];
	  this.datasource.query().then((data) => {
		  this.items = data._embeddedItems;
	  });
  }
  
  delete(item) {
	  this.datasource.delete(item).then(() => {
		  var toaster = this.$mdToast.simple()
	        .textContent('保存成功')
	        .action('OK')
	        .hideDelay(2000);
		  this.$mdToast.show(toaster).then((resp) => {
				this.$state.go(this.repo);
			});
	  });
  }
}
BaseListController.$inject = ['DataService', '$stateParams', '$mdToast', '$state'];
export default BaseListController;
