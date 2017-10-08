routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
	$stateProvider.
    state('datasource', {
    	url: '/datasource',
        templateUrl: './src/module/datasource/list.html',
        controller: 'DatasourceListController',
        controllerAs: 'page'
    }).
    state('datasourceform', {
    	url: '/datasource/',
    	templateUrl: './src/module/datasource/form.html',
        controller: 'DatasourceFormController',
        controllerAs: 'page',
        params: {entity: {}}
    });
}