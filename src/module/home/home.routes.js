routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
	$stateProvider.
    state('home', {
    	url: '/',
        templateUrl: './src/module/home/home.html',
        controller: 'HomeController',
        controllerAs: 'page'
    }).
    state('license', {
    	url: '/license',
    	templateUrl: './src/module/home/license.html'
    });
}