import angular from 'angular';
import 'angular-resource';
import 'angular-spring-data-rest';

const baseurl = 'http://localhost:9009/api/';

class DataService {
	
	constructor($http, SpringDataRestAdapter) {
		this.SpringDataRestAdapter = SpringDataRestAdapter;
		this.handler = $http;
		this.repositry = '';
	}
	
	init(repositry) {
		this.repositry = repositry;
	}
	query() {
		var adp = this.SpringDataRestAdapter;
		var httphandler = this.handler;
		var target = baseurl + this.repositry;
		return adp.process(httphandler.get(target));
	}
	get(entity) {
		var adp = this.SpringDataRestAdapter;
		var httphandler = this.handler;
		return adp.process(httphandler.get(entity._links.self.href), '_allLinks');
	}
	save(entity) {
		if (entity._links) {
			return this.handler.put(entity._links.self.href, entity);
		} else {
			return this.handler.post(baseurl + this.repositry, entity);
		}
	}
	delete(entity) {
		return this.handler.delete(entity._links.self.href);
	}
}

DataService.$inject = ['$http', 'SpringDataRestAdapter'];

export default angular.module('app.service', ['spring-data-rest'])
.service('DataService', DataService).name;