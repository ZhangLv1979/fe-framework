class BaseFormController {
  constructor(info, DataService, $stateParams, $mdToast, $state) {
	  this.title = info.title;
	  this.reponame = info.reponame;
	  this.repo = info.repo;
	  this.item = $stateParams.entity;
	  this.$mdToast = $mdToast;
	  this.$state = $state;
	  this.dataservice = DataService;
	  this.dataservice.init(this.reponame);
	  this.isnew = !this.item._links;
	  if (!this.isnew) {
		  this.dataservice.get(this.item).then((data) => {
			  this.item = data;
		  });
	  }
	  
	  console.log($stateParams);
  }
  save() {
	  this.dataservice.save(this.item).then((data) => {
	  			console.log(data);
	  			var toaster = this.$mdToast.simple()
			        .textContent('保存成功')
			        .action('OK')
			        //.position({left: true, bottom: true} )
			        .hideDelay(2000);
	  			this.$mdToast.show(toaster).then((resp) => {
	  				this.$state.go(this.repo);
	  			});
	  		}).catch((err) => {
	  			console.log(err);
	  		});
  }
}
BaseFormController.$inject = ['DataService', '$stateParams', '$mdToast', '$state'];
export default BaseFormController;