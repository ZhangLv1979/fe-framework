routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
	$stateProvider.
    state('datatable', {
    	url: '/datatable',
        templateUrl: './src/module/datatable/list.html',
        controller: 'DatatableListController',
        controllerAs: 'page'
    }).
    state('datatableform', {
    	url: '/datatable/',
    	templateUrl: './src/module/datatable/form.html',
        controller: 'DatatableFormController',
        controllerAs: 'page',
        params: {entity: {}}
    });
	
}