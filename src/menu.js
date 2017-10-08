class MenuController {
	constructor($mdSidenav) {
		this.locked = false;
		this.opened = false;
	}
	toggleopen() {
		this.opened = !this.opened;
		this.locked = this.opened;
	}
	togglelock() {
		this.locked = !this.locked;
		this.opened = this.locked & this.opened;
	}
}

MenuController.$inject = ['$mdSidenav'];
export default MenuController;
