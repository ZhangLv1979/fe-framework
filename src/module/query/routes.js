routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
	$stateProvider.
    state('query', {
    	url: '/query',
        templateUrl: './src/module/query/list.html',
        controller: 'QueryListController',
        controllerAs: 'page'
    }).
    state('queryform', {
    	url: '/query/',
    	templateUrl: './src/module/query/form.html',
        controller: 'QueryFormController',
        controllerAs: 'page',
        params: {entity: {}}
    });
}