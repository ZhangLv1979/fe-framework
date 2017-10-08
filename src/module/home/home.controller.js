class HomeController {
  constructor(DataService) {
	  this.title = 'Hello, World!';
	  
  }
}
HomeController.$inject = ['DataService'];
export default HomeController;